import dayjs from "dayjs";
import { Chat } from "../../types/chat";
import { Container, Avatar, LastMessageText, Username, LastMessageDate, UnreadMessagesCount } from "./styles";

type Props = {
  chat: Chat
}

const RecentChatsItem = (props: Props) => {
  const { chat } = props;

  return (
    <Container>
      <Avatar src={chat.user.avatar} />
      <Username>{chat.user.firstName} {chat.user.lastName}</Username>
      <LastMessageText>{chat.lastMessageText}</LastMessageText>
      <LastMessageDate>{dayjs(chat.lastMessageDate).fromNow()}</LastMessageDate>
      <UnreadMessagesCount>{chat.unreadMessagesCount}</UnreadMessagesCount>
    </Container>
  )
}

export default RecentChatsItem;