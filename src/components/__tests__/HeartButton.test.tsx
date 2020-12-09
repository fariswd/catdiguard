import React from 'react';
import HeartButton from '../HeartButton';

import renderer from 'react-test-renderer';

describe('Heart Button Component', () => {
  it('Should render without crashing', () => {
    const rendered = renderer
      .create(
        <HeartButton
          item={{
            id: '60m',
            url: 'https://cdn2.thecatapi.com/images/60m.jpg',
          }}
        />,
      )
      .toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
