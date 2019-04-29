import React from 'react';
import renderer from 'react-test-renderer';
import { TouchableHighlight } from 'react-native';

import BookmarkList from './bookmarkList.view';

describe('BookmarkList Component', () => {
  const bookmarks = [
    {
      categories: [{ alias: 'chinese' }, { alias: 'noodles' }],
      coordinates: { latitude: 37.784236, longitude: -122.406566 },
      distance: 178.1710908248786,
      id: 'TCUfp_AdAQv-g7aD6ktEEQ',
      name: 'M Y China',
      rating: 3.5,
    },
  ];
  it('> render empty component', () => {
    const component = renderer.create(<BookmarkList bookmarks={[]} />);

    expect(component).toMatchSnapshot();
  });

  it('> render component with data', () => {
    const component = renderer.create(<BookmarkList bookmarks={bookmarks} />);

    expect(component).toMatchSnapshot();
  });

  it('> delete button onClick function', () => {
    const mockCallback = jest.fn();
    const component = renderer.create(
      <BookmarkList bookmarks={bookmarks} handleDeleteButton={mockCallback} />,
    );

    component.root.findByType(TouchableHighlight).props.onPress();
    expect(mockCallback.mock.calls[0][0]).toBe(bookmarks[0]);
  });
});
