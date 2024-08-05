import { Message } from "../types";

type Props = {
  chatId: string;
  message: Message;
};

export default async function sendChat({ chatId, message }: Props) {
  const res = await fetch("http://localhost:7071/api/chat", {
    method: "POST",
    body: JSON.stringify({
      chatId,
      message: message.text,
    }),
  });

  return res.json();
}