import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { RatingComponent } from './rating.component';

const meta: Meta<RatingComponent> = {
  title: 'Components/Rating',
  component: RatingComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [RatingComponent], // Standalone component must be imported
    }),
  ],
};
export default meta;

type Story = StoryObj<RatingComponent>;

export const Default: Story = {
  args: {
    value: 3,
    max: 5,
    allowHalf: false,
  },
  render: (args) => ({
    props: { ...args },
    template: '<lib-rating [value]="value" [max]="max" [allowHalf]="allowHalf" />',
  }),
};

export const DefaultRating: Story = {
  args: {
    value: 3.5,
    max: 5,
    allowHalf: true,
  },
  render: (args) => ({
    props: { ...args },
    template: '<lib-rating [value]="value" [max]="max" [allowHalf]="allowHalf" />',
  }),
};
