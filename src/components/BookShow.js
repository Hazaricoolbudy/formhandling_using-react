import React from 'react'
import { useState } from 'react'
import BookEdit from './BookEdit'

const BookShow = ({ book, onDelete, onEdit }) => {
    const [showedit, setShowEdit] = useState(false)
    const handledelete = () => {
        onDelete(book.id)
    }
    const handleEditClick = () => {
        setShowEdit(!showedit)
    }
    let content = <h3>{book.title}</h3>
    if (showedit) {
        content = <BookEdit booktitle={book} onEdit={onEdit} />
    }
    return (
        <div className='book-show'>
            {content}
            <div className="action">

                <button className='edit' onClick={handleEditClick}>Edit</button>
                <button className='delete' onClick={handledelete}>Delete</button></div>
        </div>
    )
}

export default BookShow
