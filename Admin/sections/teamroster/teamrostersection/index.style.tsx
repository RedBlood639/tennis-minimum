import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

export const TeamRosterWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.35);
  border-radius: 0.3rem;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-bottom: 10px;
  align-items: center;
  background-color: #dfdfdf;
`

export const TeamRosterContent = styled.div`
  cursor: pointer;
  width: 100%;
  padding: 8px 3px;
`
export const TeamRosterLabel = styled.p<{ kind?: string }>`
  margin: 2px;
  margin-right: 20px;
  font-size: 18px;
  line-break: anywhere;
  border-bottom: ${(props) =>
    props.kind === 'title' ? '1px solid #9eca63;' : 'none'};
`
const TeamRosterButton = styled.button`
  margin-right: 10px;
  color: ${themeGet('colors.white')};
  border-radius: 0.3rem;
  line-height: 2.5;
  cursor: pointer;
`

export const DeleteButton = styled(TeamRosterButton)`
  background-color: ${themeGet('colors.red')};
  background-image: -webkit-linear-gradient(
    top,
    #ecb696,
    ${themeGet('colors.red')} 50%
  );
  border: 0.0625em solid ${themeGet('colors.red')};
  &:hover {
    background-color: #ecb696;
    background-image: -webkit-linear-gradient(
      top,
      #ecb696,
      ${themeGet('colors.red')} 50%
    );
    border: 0.0625em solid ${themeGet('colors.red')};
  }
`
