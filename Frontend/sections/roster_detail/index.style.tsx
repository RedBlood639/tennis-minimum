import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

export const LeagueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  gap: 50px;
  width: 80%;
  /* @media screen and (max-width: 998px) {
    flex-direction: column;
    margin: 100px 150px 0px 150px;
  }
  @media screen and (max-width: 768px) {
    margin: 100px 50px 0px 50px;
  }
  @media screen and (max-width: 320px) {
    margin: 100px 10px 0px 10px;
  } */
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
  width: 100%;
  border-radius: 0.5rem;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`
