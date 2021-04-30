import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoAdd from './index';

const props = {
  addTodo: jest.fn()
};

const setup = () => {
  const utils = render(<TodoAdd {...props} />);
  const title = screen.getByRole('heading');
  const form = screen.getByTestId('qaAddTodoForm');
  const input = screen.getByTestId('qaAddTodoInput');
  return {
    title,
    form,
    input,
    ...utils,
  }
}

test('renders <TodoAdd /> without erros', () => {
  const { form, title } = setup();

  expect(title).toHaveTextContent('Todo add');
  expect(form).toBeInTheDocument();
});

test('type text in todo add input and submit form', () => { 
  const { form, input } = setup();

  userEvent.type(input, 'Rise and shine, Mr. Freeman');
  expect(input).toHaveValue('Rise and shine, Mr. Freeman');

  fireEvent.submit(form);
  expect(input).toHaveValue('');
  expect(props.addTodo).toHaveBeenCalled();
});

test('do not submit form if the field is empty', () => {
  const { form } = setup();

  fireEvent.submit(form);
  expect(props.addTodo).not.toHaveBeenCalled();
});

