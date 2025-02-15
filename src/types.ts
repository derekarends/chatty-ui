export type Message = {
  text: string;
  sentBy: string;
  sentAt: Date;
  isChatOwner?: boolean;
  type?: string;
  image?: string;
}

export type User = {
  username: string;
}

export type ConversationResponse = {
  response: string;
}

export type Property = {
  id: number;
  price: number;
  street: string;
  city: string;
  state: string;
  zip_code: string;
  beds: number;
  baths: number;
  square_feet: number;
  image_url: string;
  message: string;
}

export type Profile = {
  businessPhones: string[];
  displayName: string;
  givenName: string;
  id: string;
  jobTitle: string;
  mail: string;
  mobilePhone: string;
  officeLocation: string;
  preferredLanguage: string;
  surname: string;
  userPrincipalName: string;
}