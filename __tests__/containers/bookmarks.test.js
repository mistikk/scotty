import React from 'react';
import renderer from 'react-test-renderer';

import BookmarksContainer from '../../src/containers/bookmarks.container';
import { BookmarkList } from '../../src/components/bookmarkList';

const bookmark = [
  {
    categories: [{ alias: 'chinese' }, { alias: 'noodles' }],
    coordinates: { latitude: 37.784236, longitude: -122.406566 },
    distance: 178.1710908248786,
    id: 'TCUfp_AdAQv-g7aD6ktEEQ',
    name: 'M Y China',
    rating: 3.5,
  },
];

jest.mock('@react-native-community/async-storage', () => {
  let asyncStorage;
  const mockBookmarks = [
    {
      categories: [{ alias: 'chinese' }, { alias: 'noodles' }],
      coordinates: { latitude: 37.784236, longitude: -122.406566 },
      distance: 178.1710908248786,
      id: 'TCUfp_AdAQv-g7aD6ktEEQ',
      name: 'M Y China',
      rating: 3.5,
    },
  ];
  return ({
    setItem: jest.fn((key, value) => new Promise((resolve) => {
      asyncStorage = value;
      resolve(JSON.stringify(mockBookmarks));
    })),
    getItem: jest.fn(() => new Promise((resolve) => {
      resolve(asyncStorage || JSON.stringify(mockBookmarks));
    })),
  });
});
jest.mock('react-navigation', () => ({
  withNavigation: component => component,
}));

describe('Bookmarks Container', () => {
  let component;
  let compInstance;

  beforeEach(() => {
    const navigation = { addListener: jest.fn(), setParams: jest.fn() };
    component = renderer.create(
      <BookmarksContainer navigation={navigation}>
        {({ bookmarks, handleDeleteButton }) => (
          <BookmarkList
            bookmarks={bookmarks}
            handleDeleteButton={handleDeleteButton}
          />
        )}
      </BookmarksContainer>,
    );
    compInstance = component.getInstance();
  });

  it('> getBookmarks function', async () => {
    await compInstance._getBookmarks();
    expect(compInstance.state.bookmarks).toEqual(bookmark);
  });

  it('> deleteBookmark function', async () => {
    await compInstance._deleteBookmark(bookmark[0]);
    expect(compInstance.state.bookmarks).toEqual([]);
  });
});
