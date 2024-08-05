import { useEffect, useRef } from "react";
import { Message } from "../../types";
import Avatar from "./Avatar";
import Ellipses from "../Ellipses";
import Robot from "./Robot";

type Props = {
  messages: Message[];
  loading: boolean;
};

function Content({ messages, loading }: Props) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="max-h-96 h-96 px-6 py-1 overflow-auto">
      {messages.map((message: Message, index: number) => (
        <div
          key={index}
          className={`py-2 flex flex-row w-full ${
            message.isChatOwner ? "justify-end" : "justify-start"
          }`}
        >
          {message.isChatOwner ?
          <div className="order-2">
            <Avatar />
          </div> :
          <div className="order-1">
            <Robot />
          </div>}
          <div
            className={`px-3 w-fit py-3 flex flex-col rounded-lg text-white ${
              message.isChatOwner
                ? "order-1 mr-2 bg-blue-500 text-right"
                : "order-2 ml-2 bg-green-700 text-left"
            }`}
          >
            <span className="text-xs text-gray-200">
              {message.sentBy}&nbsp;-&nbsp;
              {new Date(message.sentAt).toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
              <pre className="text-md whitespace-pre-wrap" style={{ fontFamily: "inherit"}}>
                {message.text}
              </pre>
          </div>
        </div>
      ))}
      {loading ? (
        <div className="order-1 flex flex-row">
          <Robot />
          <div className="px-2 w-fit py-3 flex flex-col rounded-lg text-white order-2 ml-2 bg-green-700">
            <div className="flex flex-row">
              Pondering <Ellipses />
            </div>
          </div>
        </div>
      ) : null}
      <div ref={messagesEndRef}></div>
    </div>
  );
}

export default Content;
