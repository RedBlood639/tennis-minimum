import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

export const MemberWrapper = styled.div`
  width: 90%;
`

export const MembersGroup = styled.div`
  margin-top: 100px;
  margin-bottom: 50px;
`
export const MemberContent = styled.div``
export const MemberHeader = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
  margin-bottom: 20px;
  padding-bottom: 5px;
  border-bottom: 1px solid ${themeGet('colors.primary')};
`
export const MemberLabel = styled.span`
  font-size: 25px;
  color: ${themeGet('colors.primary')};
  font-weight: 500;
`
