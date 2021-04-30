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

const setup = () => {
  const utils = render(<TodoList {...props} />);
  const todosList = screen.getByTestId('qaTodoList');
  const label = screen.getByTestId('qaTodoLabel');
  const removeButton = screen.getByText('remove');
  return {
    todosList,
    label,
    removeButton,
    ...utils,
  }
}

test('renders <TodoList /> with mocked data', async () => {
  const { todosList } = setup();
  expect(todosList).toBeInTheDocument();
});

test('mark a todo as done', () => { 
  const { label } = setup();
  fireEvent.click(label);

  expect(props.updateTodo).toHaveBeenCalled();
});

test('remove todo', () => {
  const { removeButton } = setup();
  fireEvent.click(removeButton);
  expect(props.removeTodo).toHaveBeenCalled();
});

