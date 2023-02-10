import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchTasks } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';

import { Layout } from './Layout/Layout';
import { Header } from './Header/Header';
import { TaskForm } from './TaskForm/TaskForm';
import { TaskList } from './TaskList/TaskList';

import { GlobalStyle } from './GlobalStyles';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Header />
        <TaskForm />
        {isLoading && !error && <b>Request in progress...</b>}
        <TaskList />
      </Layout>
    </>
  );
};
