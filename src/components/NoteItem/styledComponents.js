// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  width: 100%;
  border: 1px solid #d8d8d8;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-left: 0px;
  padding: 10px;
  @media (min-width: 768px) {
    width: 300px;
    border: 1px solid #d8d8d8;
    border-radius: 10px;
    margin-left: 0px;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 10px;
  }
`

export const NoteHeading = styled.h1`
  color: #1e293b;
  font-size: 20px;
`

export const NotePara = styled.p`
  color: #334155;
  font-size: 15px;
`
