// Style your elements here
// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MainHeading = styled.h1`
  font-family: 'Bree Serif';
  color: #4c63b6;
  font-size: 25px;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  font-family: 'Roboto';
  padding: 20px;
  box-shadow: 1px 1px 1px 1px #d8d8d8;
  border-radius: 10px;
  border: 1px solid #d8d8d8;
`

export const Input = styled.input`
  padding: 10px;
  width: 100%;
  margin-bottom: 20px;
  outline: none;
  border: none;
`

export const TextArea = styled.textarea`
  padding: 10px;
  width: 100%;
  outline: none;
  border: none;
`

export const Button = styled.button`
  background-color: #4c63b6;
  color: #ffffff;
  padding: 10px;
  align-self: flex-end;
  border: none;
  margin-top: 20px;
  border-radius: 5px;
`

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 80%;
  list-style-type: none;
  padding: 0px;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 80%;
    list-style-type: none;
    padding: 0px;
  }
`

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin-top: 20px;
`

export const Image = styled.img`
  width: 100px;
  height: 100px;
`

export const Heading = styled.h1`
  color: #1e293b;
  font-size: 20px;
`
export const Description = styled.p`
  color: #334155;
  font-size: 15px;
`
