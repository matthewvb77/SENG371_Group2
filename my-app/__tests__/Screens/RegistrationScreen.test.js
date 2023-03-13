import React from 'react';
import renderer from 'react-test-renderer';

import LoginScreen from '../../Screens/RegistrationScreen';

describe('<RegistrationScreen />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<LoginScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
