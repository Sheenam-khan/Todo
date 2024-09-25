import React from 'react';
import { List, Button ,Tag } from 'antd';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
    return (
        <List.Item
            actions={[
                <Button type="link" variant='outline-primary' onClick={() => toggleTodo(todo?.id)} ><Tag color={todo.completed ?'green':'geekblue'} key={todo.id}>{!todo.completed ? 'Pending' : 'Complete'}</Tag></Button>,
                <Button variant="outline-danger" danger onClick={() => deleteTodo(todo.id)}>Delete </Button>
            ]}
        >
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.todo}
            </span>
        </List.Item>
    );
};

export default TodoItem;
