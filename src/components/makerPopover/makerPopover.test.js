import React from 'react';
import renderer from 'react-test-renderer';

import { Button } from '../button';

import MakerPopover from './makerPopover.view';

describe('Maker Popover Component > iOS', () => {
  beforeEach(() => {
    jest.mock('Platform', () => {
      const Platform = require.requireActual('Platform');
      Platform.OS = 'ios';
      return Platform;
    });
  });
  it('> render the component', () => {
    const component = renderer.create(
      <MakerPopover id="1" name="test" distance={4} rating={3} />,
    );

    expect(component).toMatchSnapshot();
  });

  it('> button onClick function', () => {
    const id = '1';
    const mockCallback = jest.fn();
    const component = renderer.create(
      <MakerPopover
        id={id}
        name="test"
        distance={4}
        rating={3}
        handleOnPressBookmark={mockCallback}
      />,
    );
    component.root.findByType(Button).props.onPress();
    expect(mockCallback.mock.calls[0][0]).toBe(id);
  });
});

describe('Maker Popover Component > Android', () => {
  beforeEach(() => {
    jest.mock('Platform', () => {
      const Platform = require.requireActual('Platform');
      Platform.OS = 'android';
      return Platform;
    });
  });
  it('> render the component', () => {
    const component = renderer.create(
      <MakerPopover id="1" name="test" distance={4} rating={3} />,
    );

    expect(component).toMatchSnapshot();
  });
});
