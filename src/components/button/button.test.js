import React from 'react';
import renderer from 'react-test-renderer';

import Button from './button.view';

describe('Button Component', () => {
  it('> render the component', () => {
    const component = renderer.create(<Button text="test" />);

    expect(component).toMatchSnapshot();
  });

  it('> button onClick function', () => {
    const mockCallback = jest.fn();
    const component = renderer.create(<Button text="test" onPress={mockCallback} />);

    component.root.findByType(Button).props.onPress();
    expect(mockCallback.mock.calls.length).toEqual(1);
  });
});
