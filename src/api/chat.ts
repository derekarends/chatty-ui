import { env } from "../env";
import { Message } from "../types";

type Props = {
  chatId: string;
  message: Message;
};

export default async function sendChat({ chatId, message }: Props) {
  const res = await fetch(env.api.chat, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chatId,
      message: message.text,
    }),
  });

  return res.json();
}