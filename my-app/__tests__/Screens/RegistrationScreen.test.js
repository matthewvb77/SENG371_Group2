import React from 'react';
import renderer from 'react-test-renderer';

import RegistrationScreen from '../../Screens/RegistrationScreen';

describe('<RegistrationScreen />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<RegistrationScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
