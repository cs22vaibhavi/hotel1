import React from 'react';
import FreshRecommendations from './FreshRecommendations';

export default {
  title: 'Components1/FreshRecommendations',
  component: FreshRecommendations,
};

const Template = (args) => <FreshRecommendations {...args} />;

export const Default = Template.bind({});
Default.args = {
  // You can add props here if needed
};