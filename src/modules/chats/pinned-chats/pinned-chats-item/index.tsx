import { Chat } from "../../types/chat";
import { Container, Avatar, LastMessageText, Username } from "./styles";

type Props = {
  chat: Chat;
}

const PinnedChatsItem = (props: Props) => {
  const { chat } = props;

  return (
    <Container>
      <Avatar src={chat.user.avatar} />
      <Username>{chat.user.firstName} {chat.user.lastName}</Username>
      <LastMessageText>{chat.lastMessageText}</LastMessageText>
    </Container>
  )
}

export default PinnedChatsItem;