import { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import { ConversationResponse, Message } from "../../types";
import InputBox from "./InputBox";
import sendChat from "../../api/chat";

const aiName = "Chatty";

type Props = {
  chatId: string;
  username: string;
};

function Chat({ chatId, username }: Props) {
  const [loading, setLoading] = useState(false);
  const [chatMessages, setChatMessages] = useState<Message[]>(() => [
    {
      text: `Hey, ${username} what can I do for you today?`,
      sentBy: aiName,
      sentAt: new Date(),
      isChatOwner: false,
    },
  ]);

  const sendANewMessage = async (message: Message) => {
    setChatMessages((prevMessages) => [...prevMessages, message]);

    setLoading(true);
    let answer: ConversationResponse;
    try {
      answer = await sendChat({ chatId, message });
    } catch (e: unknown) {
      answer = { response: `Uh oh! An error occurred. Please try again` };
    } finally {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        {
          text: answer.response,
          sentBy: aiName,
          sentAt: new Date(),
          isChatOwner: false,
        },
      ]);
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mt-8 ">
      <div className="bg-white border border-gray-200 rounded-lg shadow relative">
        <Header name={username} numberOfMessages={chatMessages.length} />
        <Content loading={loading} messages={chatMessages} />
        <InputBox sendMessage={sendANewMessage} />
      </div>
    </div>
  );
}

export default Chat;
