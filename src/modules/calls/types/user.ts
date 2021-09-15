import { Avatar } from "./avatar";

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  avatar: Avatar;
  online: 0 | 1;
  status?: string;
};