import React from "react";
import HotelCard from "./HotelCard";

export default {
  title: "HotelCard",
  component: HotelCard,
};

const Template = (args) => <HotelCard {...args} />;

export const Default = Template.bind({});
