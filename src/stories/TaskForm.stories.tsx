import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import {TaskForm}, {taskProps} from '../components/TaskForm'

export default {
    title: 'Example/Task',
    component: TaskForm,

} as Meta;

const Template: Story<taskProps> = (args) => <TaskForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: "Workout One"
};

export const Secondary = Template.bind({});
Secondary.args = {
    title: "Workout One"
};
