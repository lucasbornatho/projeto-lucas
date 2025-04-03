import { ChangeEvent, useState } from "react";

type Props =
{
    onAdd: (title: string, body: string) => void;
}

function FormPost({ onAdd }: Props) {

    const[addTitleText, setAddTitleText] = useState('');
    const handleAddTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAddTitleText(e.target.value)
    }

    const[addBodyText, setAddBodyText] = useState('');
    const handleAddBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setAddBodyText(e.target.value)
    }
    
    function HandleClickButton() {
        onAdd(addTitleText, addBodyText)
    }

    return(
        <div>
            <br />
            <h1>Adicionar Novo Post</h1>
            <input value={addTitleText} type='text' placeholder='Digite um Título' onChange={handleAddTitleChange}></input>
            <br />
            <textarea value={addBodyText} onChange={handleAddBodyChange}></textarea>
            <br />
            <button onClick={HandleClickButton}>Adicionar!</button>
            <br />
        </div>
    )
}
export default FormPost