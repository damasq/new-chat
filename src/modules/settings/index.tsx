import { Container, Header, Title } from "./styles"
import { ReactComponent as LoupeIcon } from '../../common/img/loupe.svg'
import SettingsList from "./settings-list"
import UserData from "./user-data"
import { useState } from "react"
import { User } from "../calls/types/user"
import { loadRandomUser } from "./loadData"

const Settings = () => {
  const [account, setAccount] = useState<User>(loadRandomUser())
  return (
    <Container>
      <Header>
        <Title>Settings</Title>
        <LoupeIcon />
      </Header>
      <UserData account={account} />
      <SettingsList />
    </Container>
  )
}

export default Settings
