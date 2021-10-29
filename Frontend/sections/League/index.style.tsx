import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

export const LeagueWrapper = styled.div`
  display: flex;
  flex: 1;
  padding: 100px;
  justify-content: center;
  gap: 70px;
  @media screen and (max-width: 998px) {
    flex-direction: column;
    padding: 100px 150px;
  }
  @media screen and (max-width: 768px) {
    padding: 100px 50px;
  }
  @media screen and (max-width: 320px) {
    padding: 100px 10px;
  }
`
export const MemberContent = styled.div`
  max-height: calc(100vh - 250px);
  @media screen and (max-width: 1024px) {
    max-height: calc(100vh - 160px);
  }
  @media screen and (max-width: 768px) {
    max-height: calc(100vh - 400px);
  }
  overflow: auto;
  border-radius: 0.3rem;
  border: 1px solid black;
  box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
`

export const LeagueHeader = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
  margin-bottom: 20px;
  padding-bottom: 5px;
  border-bottom: 1px solid ${themeGet('colors.green')};
`
export const LeagueLabel = styled.span`
  font-size: 25px;
  color: ${themeGet('colors.green')};
  font-weight: 500;
`

export const MembersGroup = styled.div`
  width: 50%;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`
