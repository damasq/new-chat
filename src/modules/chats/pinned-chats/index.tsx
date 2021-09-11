import PinnedChatsItem from "./pinned-chats-item"
import { ChatsList, Container, Header } from "./styles"

const PinnedChats = () => {
  return (
    <Container>
      <Header>
        <h2>Pinned chats</h2>
      </Header>
      <ChatsList>
        <PinnedChatsItem />
        <PinnedChatsItem />
        <PinnedChatsItem />
        <PinnedChatsItem />
      </ChatsList>
    </Container>
  )
}

export default PinnedChats
