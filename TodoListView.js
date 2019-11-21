import React from 'react';

const TodoListView = ({ todoList, onDeleteTodo, a, c }) => {
    return (
        <ul>
        {
          todoList.map(({ subject }, i) => {
            return (
              <li key={i}>
                {subject}
                <button onClick={() => {onDeleteTodo(i);}}>X</button>
              </li>
            )
          })
        }
      </ul>
    );
}


export default TodoListView;