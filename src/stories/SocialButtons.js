// Node Modules
import React from 'react';
import { storiesOf } from '@storybook/react';

// Components
import FacebookButton from '../components/SocialButtons/Facebook';

storiesOf('Apply To/Social Buttons/Facebook', module)
  .add('Block', () => <FacebookButton />)
  .add('Small', () => <FacebookButton type='small' />);
