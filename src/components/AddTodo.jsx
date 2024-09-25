import React, { useState } from 'react';
import { Input, Form, Button } from 'antd';
import { PlusCircleTwoTone } from '@ant-design/icons';
const AddTodo = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleSubmit = () => {
        if (!text) return;
        addTodo(text);
        setText('');
    };
    return (
        <Form onFinish={handleSubmit} style={{ marginBottom: '20px', textAlign: 'center' }}>
            <Input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new task"
                style={{ width: '40%', marginRight: '10px' }}
            />
            <Button type="primary" htmlType="submit" icon={<PlusCircleTwoTone />}>Add</Button>
        </Form>
    );
};

export default AddTodo;
