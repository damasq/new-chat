import { Container, Avatar, LastMessageText, Username } from "./styles";

const PinnedChatsItem = () => {
  return (
    <Container>
      <Avatar />
      <Username>Mike Wazowski</Username>
      <LastMessageText>See you later...</LastMessageText>
    </Container>
  )
}

export default PinnedChatsItem;