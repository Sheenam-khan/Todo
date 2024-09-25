import React from 'react';
import { List, Table ,Button ,Tag} from 'antd';
import { DeleteFilled, DeleteTwoTone } from '@ant-design/icons';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
    const columns = [
        {
          title: 'Task',
          dataIndex: 'todo',
          key: 'todo',
        },
        {
          title: 'Status',
          dataIndex: 'completed',
          key: 'completed',
          render: (_,todo) => <Button type="outline-primary" onClick={() => toggleTodo(todo?.id)} ><Tag color={todo.completed ?'green':'geekblue'} key={todo.id}>{!todo.completed ? 'Pending' : 'Complete'}</Tag></Button>,
        },
        {
          title: 'Action',
          dataIndex: '',
          key: 'x',
          render: (_,todo) =><Button icon={<DeleteFilled color="danger"/>}  danger color="danger" variant="outlined" onClick={() => deleteTodo(todo.id)}/>,
        },
      ];
    return (
        <>
        {/* <List
            bordered
            dataSource={todos}
            renderItem={todo => (
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
            )}
        /> */}
        <Table
        columns={columns}
        dataSource={todos?.map(item=>({...item,key:item?.id}))}
        />
        </>
    );
};

export default TodoList;