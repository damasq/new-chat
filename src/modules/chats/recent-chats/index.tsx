import { useEffect, useState } from 'react'
import { ReactComponent as LoupeIcon } from '../../../common/img/loupe.svg'
import { loadRecentChats } from '../loadData'
import { Chat } from '../types/chat'
import RecentChatsItem from "./recent-chats-item"
import { ChatsFilter, ChatsList, Container, Filter, Header, Title } from "./styles"

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
      <ChatsFilter>
        <Filter>All chats</Filter>
        <Filter>Personal</Filter>
        <Filter>Work</Filter>
        <Filter>Groups</Filter>
      </ChatsFilter>
      <ChatsList>
        {recentChats.map(chat => <RecentChatsItem chat={chat} />)}
      </ChatsList>
    </Container>
  )
}

export default RecentChats
