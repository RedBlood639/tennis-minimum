import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

export const MatchCardWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.35);
  border-radius: 0.3rem;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-bottom: 10px;
  align-items: center;
  background-color: #dfdfdf;
  &:hover {
    background-color: #f5ee94;
  }
`

export const MatchCardContent = styled.div`
  cursor: pointer;
  width: 100%;
  padding: 8px 3px;
  display: grid;
  grid-template-columns: 0.5fr 2fr 2fr 1fr 1fr 0fr 0fr;
  transition-duration: 0.5s;
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    row-gap: 5px;
  }
`

export const MatchCardLabel = styled.span`
  margin: 2px;
  font-size: 18px;
  line-break: anywhere;
  line-break: anywhere;
  border-right: 1px solid #cac0ba;
  transition-duration: 0.5s;
  @media screen and (max-width: 1000px) {
    border-bottom: 1px solid #cac0ba;
  }
`

const MatchCardButton = styled.button`
  margin-right: 10px;
  color: ${themeGet('colors.white')};
  border-radius: 0.3rem;
  line-height: 2.5;
  cursor: pointer;
`
export const DeleteButton = styled(MatchCardButton)`
  background-color: ${themeGet('colors.red')};
  background-image: -webkit-linear-gradient(
    top,
    #ecb696,
    ${themeGet('colors.red')} 50%
  );
  border: 0.0625em solid ${themeGet('colors.red')};
`
export const UpdateButton = styled(MatchCardButton)`
  background-color: #298113;
  background-image: -webkit-linear-gradient(top, #cef393, #298113 50%);
  border: 0.0625em solid #298113;
`
