import React from 'react';
import renderer from 'react-test-renderer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Rating from './rating.view';

describe('Rating Component', () => {
  it('> render the component value 0 to 5', () => {
    for (let i = 0; i <= 5; i += 0.5) {
      const component = renderer.create(<Rating value={i} />);
      const icons = component.root.findAllByType(MaterialIcons);
      icons.map((item, index) => {
        if (index + 1 <= i) {
          expect(item.props.name).toBe('star');
        } else if (index < i && i < index + 1) {
          expect(item.props.name).toBe('star-half');
        } else if (index + 1 >= i) {
          expect(item.props.name).toBe('star-border');
        }
      });
    }
  });
});
