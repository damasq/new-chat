import { useEffect, useState } from 'react';
import { ReactComponent as LoupeIcon } from '../../common/img/loupe.svg'
import CallsItem from './calls-item'
import { loadCalls } from './loadData';
import { CallsList, Container, Header, Title } from './styles'
import { Call } from './types/call';

const Calls = () => {
  const [recentCalls, setRecentCalls] = useState<Call[]>([]);
  useEffect(() => {
    setRecentCalls(loadCalls());
  }, []);

  return (
    <Container>
      <Header>
        <Title>Recent Calls</Title>
        <LoupeIcon />
      </Header>
      <CallsList>
        {recentCalls.map(call => <CallsItem call={call}></CallsItem>)}
      </CallsList>
    </Container>
  )
}

export default Calls
