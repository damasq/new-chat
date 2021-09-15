import { Container, DarkMode, Setting, SettingContainer } from "./styles"
import { ReactComponent as IconDarkMode } from './img/dark-mode.svg'
import { ReactComponent as IconAccount } from './img/account.svg'
import { ReactComponent as IconNotification } from './img/notification.svg'
import { ReactComponent as IconChat } from './img/chat.svg'
import { ReactComponent as IconData } from './img/data.svg'
import { ReactComponent as IconPrivacy } from './img/privacy.svg'
import { ReactComponent as IconAbout } from './img/about.svg'

const SettingsList = () => {
  return (
    <Container>

      <SettingContainer>
        <IconDarkMode />
        <Setting>Dark mode</Setting>
      </SettingContainer>

      <SettingContainer>
        <IconAccount />
        <Setting>Account</Setting>
      </SettingContainer>

      <SettingContainer>
        <IconNotification />
        <Setting>Notification</Setting>
      </SettingContainer>

      <SettingContainer>
        <IconChat />
        <Setting>Chat settings</Setting>
      </SettingContainer>

      <SettingContainer>
        <IconData />
        <Setting>Data and storage</Setting>
      </SettingContainer>

      <SettingContainer>
        <IconPrivacy />
        <Setting>Privacy and security</Setting>
      </SettingContainer>

      <SettingContainer>
        <IconAbout />
        <Setting>About</Setting>
      </SettingContainer>

    </Container>
  )
}

export default SettingsList
