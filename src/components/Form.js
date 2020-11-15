import React from 'react';

const Form = ({ setInputText, setTodos, todos, inputText, setStatus }) => {

    // Actions

    const inputTextHandler = (evt) => {
        setInputText(evt.target.value);
    };

    const submitTodoHandler = (evt) => {
        evt.preventDefault();
        setTodos([
            ...todos, {
                text: inputText,
                completed: false,
                id: Math.random() * 1000
            }
        ]);
        setInputText('');
    }

    const statusHandler = (evt) => {
        setStatus(evt.target.value);
    }

    return(
        <form>
            <input value={ inputText } onChange={ inputTextHandler } type="text" className="todo-input" />
            <button onClick={ submitTodoHandler } className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
};

export default Form;