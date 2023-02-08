import { Layout } from './Layout/Layout';
import { Header } from './Header/Header';
import { TaskForm } from './TaskForm/TaskForm';
import { TaskList } from './TaskList/TaskList';

import { GlobalStyle } from './GlobalStyles';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Header />
        <TaskForm />
        <TaskList />
      </Layout>
    </>
  );
};
