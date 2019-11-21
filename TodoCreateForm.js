import React, { useState } from 'react';

const TodoCreateForm = ({ sendSubject }) => {
    const [subject, setSubject] = useState('');
    const createTodo = (e) => {
        e.preventDefault();
        sendSubject(subject);
    };

    const onChangeSubject = (event) => {
        setSubject(event.target.value);
    }
    return (
        <form onSubmit={createTodo}>
            <input type="text" placeholder="enter your todo"
            value={subject} onChange={onChangeSubject} />
            <input type="submit" value="Create" />
        </form>
    );
}


export default TodoCreateForm;