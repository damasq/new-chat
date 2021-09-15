import { User } from "../../calls/types/user"
import { Avatar, Container, Status, Username } from "./styles"

type Props = {
  account: User
}

const UserData = (props: Props) => {
  const { account } = props;

  return (
    <Container>
      <Avatar src={account.avatar} />
      <Username>{account.firstName} {account.lastName}</Username>
      <Status>{account.status}</Status>
    </Container>
  )
}

export default UserData
