// Write your code here
import {ListItem, NoteHeading, NotePara} from './styledComponents'

const NoteItem = props => {
  const {eachItem} = props
  const {title, note} = eachItem

  return (
    <ListItem>
      <NoteHeading>{title}</NoteHeading>
      <NotePara>{note}</NotePara>
    </ListItem>
  )
}

export default NoteItem
