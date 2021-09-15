import { Call, CallType, CallStatus } from "./types/call";
import faker from 'faker';

function generateRandomCall(): Call {
  return {
    id: faker.datatype.uuid(),
    user: {
      id: faker.datatype.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      avatar: faker.image.avatar(),
      online: faker.datatype.number(1) as 0 | 1,
    },
    lastCallStatus: faker.datatype.number(2) as CallStatus,
    lastCallType: faker.datatype.number(1) as CallType,
    lastCallDate: faker.date.recent().toJSON(),
  };
}

export function loadCalls(): Call[] {
  const recentCalls: Call[] = [];
  for (let i = 0; i < 5; i++) {
    recentCalls[i] = generateRandomCall();
  }
  return recentCalls;
}