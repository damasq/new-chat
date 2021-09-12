import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas: 
  'avatar username time'
  'avatar text counter';
  grid-template-columns: 48px 1fr 36px;
  grid-template-rows: 24px 24px;
  /* grid-gap: 10px; */
  padding: 8px 16px;
  
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`

export const Avatar = styled.img`
  grid-area: avatar;
  /* position: relative; */
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
`

export const Username = styled.div`
  grid-area: username;
  align-self: center;
  font-weight: 400;
  font-size: 14px;
  margin-left: 8px;
`

export const LastMessageText = styled.div`
  grid-area: text;
  align-self: center;
  font-weight: 400;
  font-size: 12px;
`

export const LastMessageDate = styled.div`

`

export const UnreadMessagesCount = styled.div`

`
