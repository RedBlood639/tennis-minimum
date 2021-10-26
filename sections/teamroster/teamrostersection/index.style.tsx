import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

export const TeamRosterWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.35);
  border-radius: 0.3rem;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
`

export const TeamRosterContent = styled.div`
  cursor: pointer;
  width: 100%;
  padding: 10px 3px;
`
export const TeamRosterLabel = styled.p`
  margin: 2px;
  font-size: 18px;
`
export const TeamRosterButton = styled.button`
  color: ${themeGet('colors.white')};
  border-radius: 0.3rem;
  line-height: 3;
  background-color: #b43313;
  background-image: -webkit-linear-gradient(top, #ecb696, #b43313 50%);
  border: 0.0625em solid #b43313;
  cursor: pointer;
  &:hover {
    background-color: #ecb696;
    background-image: -webkit-linear-gradient(top, #ecb696, #b43313 50%);
    border: 0.0625em solid #b43313;
  }
`
