import React from 'react';
import renderer from 'react-test-renderer';

import Tag from './tag.view';

describe('Tag Component', () => {
  it('> render the component', () => {
    const value = 'scotty';
    const component = renderer.create(<Tag value={value} />);
    expect(component).toMatchSnapshot();
  });
});
