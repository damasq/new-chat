import { ReactComponent as LoupeIcon } from '../../../common/img/loupe.svg'
import RecentChatsItem from "./recent-chats-item"
import { ChatsList, Container, Header, Title } from "./styles"

const RecentChats = () => {
  return (
    <Container>
      <Header>
        <Title>Recent chats</Title>
        <LoupeIcon />
      </Header>
      <ChatsList>
        <RecentChatsItem />
        <RecentChatsItem />
        <RecentChatsItem />
        <RecentChatsItem />
      </ChatsList>
    </Container>
  )
}

export default RecentChats
