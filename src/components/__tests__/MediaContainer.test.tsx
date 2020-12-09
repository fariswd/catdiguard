import React from 'react';
import MediaContainer from '../MediaContainer';

import renderer from 'react-test-renderer';

jest.mock('react-native-view-shot', () => jest.fn());

describe('Show Media Container Component', () => {
  it.skip('Should render without crashing', () => {
    const rendered = renderer
      .create(
        <MediaContainer
          item={{
            id: '60m',
            url: 'https://cdn2.thecatapi.com/images/60m.jpg',
          }}
          index={1}
          key={`detail${1}`}
          navigation={() => jest.fn()}
          disableDetail={true}
        />,
      )
      .toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
