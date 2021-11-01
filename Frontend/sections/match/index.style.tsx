import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

export const MatchWrapper = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  justify-content: center;
`

export const MatchHeader = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
  margin-bottom: 20px;
  padding-bottom: 5px;
  border-bottom: 1px solid ${themeGet('colors.primary')};
`
export const MatchLabel = styled.span`
  font-size: 25px;
  color: ${themeGet('colors.primary')};
  font-weight: 500;
`
export const MatchContent = styled.div`
  width: 80%;
`
export const MatchButton = styled.button`
  margin-right: 10px;
  color: ${themeGet('colors.white')};
  border-radius: 0.3rem;
  line-height: 2.5;
  cursor: pointer;
`
export const SaveButton = styled(MatchButton)`
  background-color: ${themeGet('colors.blue')};
  background-image: -webkit-linear-gradient(
    top,
    #5ca2e6,
    ${themeGet('colors.blue')} 50%
  );
  border: 0.0625em solid ${themeGet('colors.blue')};
  cursor: pointer;
  &:hover {
    background-color: #6eb5f9;
    background-image: -webkit-linear-gradient(top, #6eb5f9, #2b89cb 50%);
    border: 0.0625em solid ${themeGet('colors.blue')};
  }
`
export const DeleteButton = styled(MatchButton)`
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
export const UpdateButton = styled(MatchButton)`
  background: ${themeGet('colors.primary')};
  border: 1px solid ${themeGet('colors.primary')};
  color: ${themeGet('colors.white')};
  &:hover {
    background: ${themeGet('colors.white')};
    color: ${themeGet('colors.black')};
  }
`
export const MatchCards = styled.div`
  max-height: 450px;
  overflow: auto;
`
