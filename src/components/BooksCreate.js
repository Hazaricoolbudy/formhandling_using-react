import React, { useState } from "react";

const BooksCreate = ({ onCreate }) => {
    const [booktitle, setBooktitle] = useState("");
    const handleChange = (e) => {
        setBooktitle(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate(booktitle);
        setBooktitle("");
    };
    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={booktitle}
                    onChange={handleChange}
                    className="input"
                />
                <button className="button">CreateBook</button>
            </form>
        </div>
    );
};

export default BooksCreate;
