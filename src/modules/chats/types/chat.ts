import { User } from "./user";

export type Chat = {
  id: string;
  user: User;
  lastMessageText: string;
  lastMessageDate: string;
  unreadMessagesCount: number;
}