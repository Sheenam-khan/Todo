import { Layout, Skeleton, Typography } from 'antd';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Filter from './Filter';
import useTodo from '../hooks/useTodo';
const { Header, Content } = Layout;
const { Title } = Typography;

const TodoApp = () => {
    const {setFilter,addTodo,deleteTodo,toggleTodo,filteredTodos=[],filter='all',loading=false}=useTodo()
    return (
        <Layout>
            <Header>
                <Title style={{ color: 'white', textAlign: 'center' }}>Todo List</Title>
            </Header>
            <Content style={{ padding: '20px' }}>
                <AddTodo addTodo={addTodo} />
                <Filter setFilter={setFilter} filter={filter} />
                <Skeleton loading={loading} active>
                <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
                </Skeleton>
            </Content>
        </Layout>
    );
};

export default TodoApp;