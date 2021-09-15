import faker from 'faker';
import { User } from "../calls/types/user";

export function loadRandomUser(): User {
  return {
    id: faker.datatype.uuid(),
    avatar: faker.image.avatar(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    online: faker.datatype.number(1) as 0 | 1,
    status: faker.lorem.sentence()
  }
}