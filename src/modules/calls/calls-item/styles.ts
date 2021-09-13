import styled from 'styled-components';

export const Container = styled.div`
display: grid;
  grid-template-areas: 
  'avatar username username calltype'
  'avatar callstatus calldate calltype';
  grid-template-columns: 48px 20px 1fr 48px;
  grid-template-rows: 24px 24px;
  padding: 8px 16px;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const Avatar = styled.img`
  grid-area: avatar;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Username = styled.div`
  grid-area: username;
`;

export const LastCallStatus = styled.div`
  grid-area: callstatus;
`;

export const LastCallDate = styled.div`
  grid-area: calldate;
`;

export const LastCallType = styled.div`
  grid-area: calltype;
`;

export const Loupe = styled.div`

`;

