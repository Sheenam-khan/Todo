import React from 'react';
import { List, Button ,Tag } from 'antd';
import { DeleteFilled } from '@ant-design/icons';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
    return (
        <List.Item
            actions={[
                <Button type="outline-primary" onClick={() => toggleTodo(todo?.id)} ><Tag color={todo.completed ?'green':'geekblue'} key={todo.id}>{!todo.completed ? 'Pending' : 'Complete'}</Tag></Button>,
                <Button icon={<DeleteFilled color="danger"/>}  danger color="danger" variant="outlined" onClick={() => deleteTodo(todo.id)}/>
            ]}
        >
            <span>
                {todo.todo}
            </span>
        </List.Item>
    );
};

export default TodoItem;
