import { useEffect, useState } from 'react'
import { ReactComponent as LoupeIcon } from '../../../common/img/loupe.svg'
import { loadRecentChats } from '../loadData'
import { Chat } from '../types/chat'
import RecentChatsItem from "./recent-chats-item"
import { ChatsList, Container, Header, Title } from "./styles"

const RecentChats = () => {
  const [recentChats, setRecentChats] = useState<Chat[]>([])
  useEffect(() => {
    setRecentChats(loadRecentChats())
  }, [])

  return (
    <Container>
      <Header>
        <Title>Recent chats</Title>
        <LoupeIcon />
      </Header>
      <ChatsList>
        {recentChats.map(chat => <RecentChatsItem chat={chat} />)}
      </ChatsList>
    </Container>
  )
}

export default RecentChats
