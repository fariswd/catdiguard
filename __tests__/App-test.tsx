import 'react-native';
import React from 'react';
import App from '../src/App';

import renderer from 'react-test-renderer';

it('Should render without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toMatchSnapshot();
});
