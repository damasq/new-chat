import { useEffect, useState } from "react"
import { loadPinnedChats } from "../loadData"
import { Chat } from "../types/chat"
import PinnedChatsItem from "./pinned-chats-item"
import { ChatsList, Container, Header, Title } from "./styles"

const PinnedChats = () => {
  const [pinnedChats, setPinnedChats] = useState<Chat[]>([])
  useEffect(() => {
    setPinnedChats(loadPinnedChats())
  }, [])

  return (
    <Container>
      <Header>
        <Title>Pinned chats</Title>
      </Header>
      <ChatsList>
        {pinnedChats.map(chat => <PinnedChatsItem chat={chat} />)}
      </ChatsList>
    </Container>
  )
}

export default PinnedChats
