import { useState, useEffect } from 'react';

const useTodo = () => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    const [loading, setLoading] = useState(false);
    const [todos, setTodos] = useState(storedTodos);
    const [filter, setFilter] = useState('all');
    const getTodos = async () => {
        try {
            const resp = await fetch('https://dummyjson.com/todos?limit=2');
            const data = await resp.json();
            setTodos(data?.todos);
            setLoading(false)
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    };
    useEffect(() => {
        if (!storedTodos?.length) {
            setLoading(true)
            getTodos()
        }
    }, []);


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = todo => {
        const newTodo = { id: Date.now(), todo, completed: false, userId: Date.now() };
        const todosArr = [...todos, newTodo]
        setTodos(todosArr);
    };

    const toggleTodo = id => {
        const todosArr = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
        setTodos(todosArr);
    };

    const deleteTodo = id => {
        const todosArr = todos.filter(todo => todo.id !== id)
        setTodos(todosArr);
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === 'pending') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    });
    return { filteredTodos, todos, filter, loading, setFilter, addTodo, deleteTodo, toggleTodo };
};

export default useTodo; 