import { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './input.component';

const meta: Meta<InputComponent> = {
  title: 'Components/Input',
  component: InputComponent,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'number', 'password', 'email'],
      description: 'Input type',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input',
    },
    readonly: {
      control: 'boolean',
      description: 'Sets the input to readonly',
    },
    class: {
      control: 'text',
      description: 'Additional Tailwind CSS classes for customization',
    },
    hint: {
      control: 'text',
      description: 'Hint text',
    },
    error: {
      control: 'text',
      description: 'Error message',
    },
    counter: {
      control: 'number',
      description: 'Character counter limit',
    },
    prefix: {
      control: 'boolean',
      description: 'Show prefix',
    },
    suffix: {
      control: 'boolean',
      description: 'Show suffix',
    },
  },
};

export default meta;

type Story = StoryObj<InputComponent>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text',
  },
  render: (args) => ({
    props: args,
  }),
};

export const WithHint: Story = {
  args: {
    placeholder: 'Enter text',
    hint: 'Hint: Enter your name',
  },
  render: (args) => ({
    props: args,
  }),
};

export const WithError: Story = {
  args: {
    placeholder: 'Enter text',
    error: 'This field is required',
  },
  render: (args) => ({
    props: args,
  }),
};

export const WithCounter: Story = {
  args: {
    placeholder: 'Enter text',
    counter: 50,
  },
  render: (args) => ({
    props: args,
  }),
};

export const Disabled: Story = {
  args: {
    placeholder: 'Enter text',
    disabled: true,
  },
  render: (args) => ({
    props: args,
  }),
};

export const CustomStyled: Story = {
  args: {
    placeholder: 'Enter text',
    class: 'text-lg px-4 py-2 border-gray-300 focus:ring-2 focus:ring-blue-500',
  },
  render: (args) => ({
    props: args,
  }),
};
