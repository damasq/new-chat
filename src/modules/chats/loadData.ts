import faker from 'faker';
import { Chat } from './types/chat';

function generateRandomChat(): Chat {
  return {
    id: faker.datatype.uuid(),
    user: {
      id: faker.datatype.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      avatar: faker.image.avatar(),
      status: faker.datatype.number(1) as 0 | 1,
    },
    lastMessageText: faker.lorem.sentence(),
    unreadMessagesCount: faker.datatype.number(5),
    lastMessageDate: faker.date.recent().toJSON()
  }
}

export function loadPinnedChats(): Chat[] {
  const pinnedChats: Chat[] = [];
  for (let i = 0; i < 4; i++) {
    pinnedChats[i] = generateRandomChat();
  }
  return pinnedChats;
}

export function loadRecentChats(): Chat[] {
  const chats: Chat[] = [];
  for (let i = 0; i < 10; i++) {
    chats[i] = generateRandomChat();
  }
  return chats;
}