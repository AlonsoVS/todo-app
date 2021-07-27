import { FC, useState } from "react";
import { AddFormStyled, InputStyled, SubmitInputStyled } from "../../styles/AddTaskFormsStyles";

type Props = {
  onTagDone:Function
}

const NewTagForm:FC<Props> = ({ onTagDone }) => {
  const [newTag, setNewTag] = useState<string>('');
  const handlerTagSubmit = (event:any) => {
    onTagDone(newTag);
    event.preventDefault();
  }
  const handlerTagChange = (event:any) => {
    setNewTag(() => event.target.value);
    event.preventDefault();
  }
  return (
    <AddFormStyled onSubmit={handlerTagSubmit}>
      <InputStyled type='text' placeholder='Tag' value={newTag} onChange={handlerTagChange} />
      <SubmitInputStyled type='submit' value='Done' />
    </AddFormStyled>
  )
}

export default NewTagForm