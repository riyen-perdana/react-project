import { useState } from 'react';

import classes from './NewPost.module.css';

export default function NewPost(props) {

    const [message, setMessage] = useState('');
    const [name, setName] = useState('');


    function messageChangeHandler(event) {
        setMessage(event.target.value);
    }

    function nameChangeHandler(event) {
        setName(event.target.value);
    }

    function submitPostHandler(event) {
        event.preventDefault();

        const newPost = {
            id: Math.random(),
            name: name,
            message: message
        };

        props.addPost(newPost);

        setMessage('');
        setName('');
        props.onClose();
    }


    return (
        <form className={classes.form} onSubmit={submitPostHandler}>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={nameChangeHandler} />
            </p>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={messageChangeHandler} />
            </p>
            <p className={classes.actions}>
                <button type='reset' onClick={props.onClose}>Cancel</button>
                <button type='submit' className={classes.actions}>Create</button>
            </p>
        </form>
    )
}
