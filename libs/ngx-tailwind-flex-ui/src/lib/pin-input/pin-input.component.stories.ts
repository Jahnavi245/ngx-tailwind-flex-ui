import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { PinInputComponent } from './pin-input.component';
import { CommonModule } from '@angular/common';  // ✅ Add this
import { FormsModule } from '@angular/forms';  // ✅ Add this

const meta: Meta<PinInputComponent> = {
  title: 'Components/PinInput',
  component: PinInputComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FormsModule, PinInputComponent], // ✅ Fix import references
    }),
  ],
};

export default meta;

type Story = StoryObj<PinInputComponent>;

export const DefaultPinInput: Story = {
  args: {
    length: 6,
    type: 'number',
    autoSubmit: false,
  },
  render: (args) => ({
    props: args,
    template: `<lib-otp-input [length]="6" [type]="'number'" (completed)="verifyOtp($event)"></lib-otp-input>`,
  }),
};
