import { FC, useState } from 'react'
import { AddFormStyled, InputStyled, SubmitInputStyled } from '../../styles/AddTaskFormsStyles';

type Props = {
  handleDone:Function
}

const AddDescriptionForm:FC<Props> = ({ handleDone }) => {
  const [description, setDescription] = useState<string>('');
  const handleChange = (event:any) => {
    setDescription(() => event.target.value);
    event.preventDefault();
  }
  const handleSubmit = (event:any) => {
    handleDone(description);
    event.preventDefault();
  }
  return (
    <AddFormStyled onSubmit={handleSubmit} >
        <InputStyled 
          type='text' 
          placeholder='Task description' 
          value={description} 
          onChange={handleChange} />
        <SubmitInputStyled type='submit' value='Done' />
    </AddFormStyled>
  )
}

export default AddDescriptionForm
