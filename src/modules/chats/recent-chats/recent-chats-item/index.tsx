import { Container, Avatar, LastMessageText, Username, LastMessageDate, UnreadMessagesCount } from "./styles";

const RecentChatsItem = () => {
  return (
    <Container>
      <Avatar />
      <Username>Darlene Steward</Username>
      <LastMessageText>Pls take a look at the images.</LastMessageText>
      <LastMessageDate>27.10</LastMessageDate>
      <UnreadMessagesCount>3</UnreadMessagesCount>
    </Container>
  )
}

export default RecentChatsItem;