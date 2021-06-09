import React, {useState} from "react";
import Notes from "./Notes";

export default function Dashboard(){
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const [notes, setNotes] = useState([]);
    
    const handleAdd = ()=>{
        const prev = notes;
        setNotes([...prev,{
            title,
            note
        }])
        console.log(notes)
    }

    return(
        <React.Fragment>
        <div>
        <label htmlFor='title'>Title</label>
        <br/>
        <input
        type='text'
        id='title'
        name='title'
        value={title}
        placeholder='Title'
        onChange={(e)=>setTitle(e.target.value)}
        spellCheck='false'
        />
        <br/>
        <label htmlFor='note'>Note</label>
        <br/>
        <textarea
        id='note'
        name='note'
        value={note}
        onChange={(e)=>setNote(e.target.value)}
        />
        <br/>
        <button
        onClick={handleAdd}
        >Add</button>
        </div>
        {notes.map((n,index)=>{
            return <Notes k={index} note={n}/>
        })}
        </React.Fragment>
    )
}