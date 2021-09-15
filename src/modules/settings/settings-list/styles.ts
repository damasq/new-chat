import styled from "styled-components";
import IconArrow from './img/arrow.svg'

export const Container = styled.div`

`

export const DarkMode = styled.div`

`

export const SettingContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 24px;
  position: relative;
  :not(:last-child, :first-child) ::after {
    position: absolute;
    top: 16px;
    right: 24px;
    content: url(${IconArrow});
  }
`

export const Setting = styled.div`
  margin-left: 16px;
`
