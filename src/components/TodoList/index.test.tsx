import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './index';

const props = {
  loading: true,
  todos: [{
    id: '1',
    text: 'Mocked todo 1',
    done: false
  }],
  removeTodo: jest.fn(),
  updateTodo: jest.fn(),
  setTodos: jest.fn(),
  fetchTodos: jest.fn()
};

test('renders <TodoList /> with mocked data', async () => {
  render(<TodoList {...props} />);
  
  const todosList = screen.getByTestId('qaTodoList');
  expect(todosList).toBeInTheDocument();
});

test('mark a todo as done', async () => { 
  render(<TodoList {...props} />);

  const label = screen.getByTestId('qaTodoLabel');
  fireEvent.click(label);

  expect(props.updateTodo).toHaveBeenCalled();
});

test('remove todo', async () => { 
  render(<TodoList {...props} />);

  fireEvent.click(screen.getByText('remove'));

  expect(props.removeTodo).toHaveBeenCalled();
});

