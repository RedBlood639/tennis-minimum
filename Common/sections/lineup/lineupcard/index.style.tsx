import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

export const LineupCardWrapper = styled.div`
  background-color: #ecebeb;
  border: 1px solid gray;
  margin-bottom: 5px;
  padding: 10px 30px;
  border-radius: 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition-duration: 0.5s;
  cursor: pointer;
  @media screen and (max-width: 425px) {
    flex-direction: column;
    align-items: unset;
  }
`
export const LineupCardForm = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  transition-duration: 0.5s;
  @media screen and (max-width: 885px) {
    flex-direction: column;
    gap: 10px;
  }
`
export const LineupCardLabel = styled.span`
  line-break: anywhere;
`

export const No = styled(LineupCardLabel)`
  color: ${themeGet('colors.red')};
`
export const LineupCardButton = styled.button`
  transition-duration: 0.5s;
  @media screen and (max-width: 425px) {
    margin-top: 10px;
  }
  margin-right: 10px;
  color: ${themeGet('colors.white')};
  border-radius: 0.3rem;
  line-height: 2.5;
  cursor: pointer;
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
