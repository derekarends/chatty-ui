export type Message = {
  text: string;
  sentBy: string;
  sentAt: Date;
  isChatOwner?: boolean;
}

export type User = {
  username: string;
}

export type ConversationResponse = {
  response: string;
}