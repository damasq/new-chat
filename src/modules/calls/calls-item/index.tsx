import { Call } from "../types/call"
import { ReactComponent as IconPhoneCall } from './../../../common/img/icon-phone-call.svg';
import { ReactComponent as IconVideoCall } from './../../../common/img/icon-video-call.svg';
import { ReactComponent as IconIncCall } from './../../../common/img/icon-inc-call.svg';
import { ReactComponent as IconOutCall } from './../../../common/img/icon-out-call.svg';
import { ReactComponent as IconMissCall } from './../../../common/img/icon-missed-call.svg';
import { LastCallType, LastCallDate, LastCallStatus, Username, Avatar, Container } from "./styles"

type Props = {
  call: Call;
}

function setStatusIcon(num: number): any {
  if (num === 0) {
    return <IconIncCall />
  }
  if (num === 1) {
    return <IconOutCall />
  }
  if (num === 2) {
    return <IconMissCall />
  }
}

const CallsItem = (props: Props) => {
  const { call } = props;
  return (
    <Container>
      <Avatar src={call.user.avatar} />
      <Username>{call.user.firstName} {call.user.lastName}</Username>
      <LastCallStatus>
        {setStatusIcon(call.lastCallStatus)}
      </LastCallStatus>
      <LastCallDate>{call.lastCallDate}</LastCallDate>
      <LastCallType>
        {call.lastCallType ? <IconPhoneCall /> : <IconVideoCall />}
      </LastCallType>
    </Container>
  )
}

export default CallsItem
