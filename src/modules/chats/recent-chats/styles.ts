import styled from "styled-components";

export const Container = styled.div`
  
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h2`

`

export const ChatsFilter = styled.ul`

`

export const Filter = styled.li`
  padding: 4px 8px;
  border-radius: 4px;
  display: inline-block;
  box-shadow: 0px 4px 32px 0px #4660871A;
  
  :not(:first-child) {
    margin-left: 24px;
  }
  
  :first-child {
    color: #fff;
    background-color: #2F80ED;
  }
`

export const ChatsList = styled.div`

`
