// Ant Design Style
import 'antd/dist/antd.css';

// Storybook configuration
import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories/SocialButtons');
}

configure(loadStories, module);
