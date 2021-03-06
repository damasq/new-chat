import { ReactComponent as CallsInactive } from './img/calls-inactive.svg';
import { ReactComponent as ChatsActive } from './img/chats-active.svg';
import { ReactComponent as ProfileInactive } from './img/profile-inactive.svg';
import { ReactComponent as RecentInactive } from './img/recent-inactive.svg';
import * as Components from './styles'

const MainLayout = (props: any) => {
  return (
    <Components.Container>
      {props.children}
      <Components.Tabs>
        <Components.Tab>
          <CallsInactive />
        </Components.Tab>
        <Components.Tab>
          < ChatsActive />
        </Components.Tab>
        <Components.Tab>
          < ProfileInactive />
        </Components.Tab>
        <Components.Tab>
          < RecentInactive />
        </Components.Tab>
      </Components.Tabs>
    </Components.Container>
  );
}

export default MainLayout;