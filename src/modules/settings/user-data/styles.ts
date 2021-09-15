import styled from "styled-components";

export const Container = styled.div`
  margin: 24px;
  display: grid;
  grid-template-areas: 
    'avatar username'
    'avatar status'
  ;
  grid-template-columns: 64px auto;
  /* grid-template-rows: 64px auto; */
  grid-row-gap: 8px;
  grid-column-gap: 24px;
`

export const Avatar = styled.img`
  grid-area: avatar;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
`

export const Username = styled.span`
  grid-area: username;

`

export const Status = styled.p`
  grid-area: status;

`