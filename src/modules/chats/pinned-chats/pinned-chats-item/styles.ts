import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas: 
  'avatar username'
  'text text';
  grid-template-columns: 36px 1fr;
  grid-template-rows: 36px 18px;
  grid-row-gap: 12px;
  width: 50%;
  padding: 16px 16px 20px;
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
