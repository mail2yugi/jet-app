import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';

test('Check SignIn rendered', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>);
});
