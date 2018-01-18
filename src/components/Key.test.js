import React from 'react';
import ReactDOM from 'react-dom';
import Key from './Key';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Key />, div);
  ReactDOM.unmountComponentAtNode(div);
});
