import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

export const LeagueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  gap: 50px;
  width: 80%;
`
export const MemberContent = styled.div`
  max-height: calc(100vh - 250px);
  transition-duration: 0.5s;
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
  border-bottom: 1px solid ${themeGet('colors.primary')};
`
export const LeagueLabel = styled.span`
  font-size: 25px;
  color: ${themeGet('colors.primary')};
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
