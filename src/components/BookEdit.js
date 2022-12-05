import React from 'react'
import { useState } from 'react'

const BookEdit = ({ booktitle, onEdit }) => {
    const [title, setTitle] = useState(booktitle.title)
    const handleChange = (e) => {

        setTitle(e.target.value)
    }
    const onHandleSubmit = (event) => {
        event.preventDefault();
        console.log(`new title is ${title}`);
        onEdit(booktitle.id, title)

    }
    return (
        <div>
            <form className='book-edit' onSubmit={onHandleSubmit}>
                <label > Title</label>
                <input className='input' onChange={handleChange} value={title} />
                <button className='button is-primary'>Save</button>
            </form>
        </div>
    )
}

export default BookEdit
