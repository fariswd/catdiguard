import React from 'react';
import ShareButton from '../ShareButton';

import renderer from 'react-test-renderer';

describe('Download Button Component', () => {
  it('Should render without crashing', () => {
    const rendered = renderer
      .create(<ShareButton imageRef="imageRef" />)
      .toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
