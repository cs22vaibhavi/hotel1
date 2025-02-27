import React from 'react';
import HotelApp from './HotelApp';

export default {
  title: 'HotelApp/HotelApp',
  component: HotelApp,
};

const Template = (args) => <HotelApp {...args} />;

export const Default = Template.bind({});
Default.args = {
  
};