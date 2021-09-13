import { User } from "./user";

export type CallType = 0 | 1;
export type CallStatus = 0 | 1 | 2;

export type Call = {
  id: string;
  user: User;
  lastCallStatus: CallStatus;
  lastCallDate: string;
  lastCallType: CallType;
}