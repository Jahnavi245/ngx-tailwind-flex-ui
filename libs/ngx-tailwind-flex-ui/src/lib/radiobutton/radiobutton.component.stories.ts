import { Meta, StoryObj } from '@storybook/angular';
import { RadioButtonComponent } from './radiobutton.component';

export default {
  title: 'Components/Radio Button',
  component: RadioButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text', description: 'Value of the radio button' },
    name: { control: 'text', description: 'Group name for radio buttons' },
    checked: { control: 'boolean', description: 'Checked state' },
    disabled: { control: 'boolean', description: 'Disables the radio button' },
  },
} as Meta<RadioButtonComponent>;

type Story = StoryObj<RadioButtonComponent>;

export const Default: Story = {
  args: {
    name: 'radioGroup',
    value: 'option1',
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    name: 'radioGroup',
    value: 'option2',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    name: 'radioGroup',
    value: 'option3',
    disabled: true,
  },
};
