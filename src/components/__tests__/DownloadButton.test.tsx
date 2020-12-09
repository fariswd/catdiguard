import React from 'react';
import DownloadButton from '../DownloadButton';

import renderer from 'react-test-renderer';

describe('Download Button Component', () => {
  it('Should render without crashing', () => {
    const rendered = renderer
      .create(<DownloadButton imageRef="imageRef" />)
      .toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
