import { env } from "../env";
import { msalInstance } from "../main";
import { Message } from "../types";

type Props = {
  chatId: string;
  message: Message;
};

export default async function sendChat({ chatId, message }: Props) {
  const account = msalInstance.getActiveAccount();
  if (!account) {
    throw Error(
      "No active account! Verify a user has been signed in and setActiveAccount has been called."
    );
  }

  const response = await msalInstance.acquireTokenSilent({
    scopes: ["api://377c5ab6-4217-4f2e-8301-82a2b151ba10/Scope.Api.All"],
    account: account,
  });

  const res = await fetch(env.api.chat, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${response.accessToken}`,
    },
    body: JSON.stringify({
      chatId,
      message: message.text,
    }),
  });

  return res.json();
}
