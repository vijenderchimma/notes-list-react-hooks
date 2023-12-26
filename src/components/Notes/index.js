// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'

import {
  MainContainer,
  MainHeading,
  FormContainer,
  Input,
  TextArea,
  ListContainer,
  EmptyContainer,
  Heading,
  Description,
  Button,
  Image,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState()

  const [note, setNote] = useState()

  const [itemList, setItemList] = useState([])

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeTextNote = event => {
    setNote(event.target.value)
  }

  const onClickAddBtn = event => {
    event.preventDefault()

    const newNote = {
      id: uuidv4(),
      title,
      note,
    }
    setItemList(prev => [...prev, newNote])
    setNote('')
    setTitle('')
  }

  console.log(itemList.length)

  return (
    <MainContainer>
      <MainHeading>Notes</MainHeading>
      <FormContainer>
        <Input value={title} placeholder="Title" onChange={onChangeTitle} />
        <TextArea
          value={note}
          rows="4"
          columns="50"
          onChange={onChangeTextNote}
          placeholder="Take a Note..."
        >
          {note}
        </TextArea>
        <Button onClick={onClickAddBtn}>Add</Button>
      </FormContainer>
      {itemList.length <= 0 ? (
        <EmptyContainer>
          <Image
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <Heading>No Notes Yet</Heading>
          <Description>Notes you add will appear here</Description>
        </EmptyContainer>
      ) : (
        <ListContainer>
          {itemList.map(eachItem => (
            <NoteItem eachItem={eachItem} key={eachItem.id} />
          ))}
        </ListContainer>
      )}
    </MainContainer>
  )
}

export default Notes
