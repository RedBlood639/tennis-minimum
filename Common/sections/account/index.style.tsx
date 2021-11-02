import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

export const AccountWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  transition-duration: 0.5s;
  @media screen and (max-width: 729px) {
    width: 80%;
  }
`
export const AccountContent = styled.div`
  margin-top: 50px;
`
export const AccountInput = styled.input`
  border-radius: 5%;
  font-size: 18px;
  height: 40px;
  border: 1px solid #495057;
  &:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
  }
`
export const AccountForm = styled.div`
  display: grid;
  gap: 20px;
  align-items: center;
  grid-template-columns: 1fr 2fr;
  margin-bottom: 10px;
  transition-duration: 0.5s;
  @media screen and (max-width: 729px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`
export const AccountLabel = styled.span`
  font-weight: 500;
`
export const AccountHeader = styled.span`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  transition-duration: 0.5s;
  @media screen and (max-width: 729px) {
    margin-top: 100px;
    font-size: 25px;
  }
`
export const AccountButton = styled.button`
  margin: 1.5rem;
  color: ${themeGet('colors.white')};
  padding: 0.3rem 4rem;
  font-size: 1rem;
  border-radius: 0.3rem;
  line-height: 1.5;
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
