import { Layout, Typography } from 'antd';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Filter from './Filter';
import useTodo from '../hooks/useTodo';
const { Header, Content } = Layout;
const { Title } = Typography;

const TodoApp = () => {
    const {filteredTodos,filter,setFilter,addTodo,deleteTodo,toggleTodo}=useTodo()
    return (
        <Layout>
            <Header>
                <Title style={{ color: 'white', textAlign: 'center' }}>Todo List</Title>
            </Header>
            <Content style={{ padding: '20px' }}>
                <AddTodo addTodo={addTodo} />
                <Filter setFilter={setFilter} filter={filter} />
                <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
            </Content>
        </Layout>
    );
};

export default TodoApp;