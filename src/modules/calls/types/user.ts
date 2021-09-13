import { Avatar } from "./avatar";

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  avatar: Avatar;
  status: 0 | 1;
};