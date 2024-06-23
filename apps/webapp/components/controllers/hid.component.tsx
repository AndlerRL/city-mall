'use client'

import { connectToDevice } from '~/utils/hid';
import { GamepadControl } from './gamepad-control.component';
import { VoiceControl } from './voice-control.component';

export function HID() {
  const handleAction = (action) => {
    console.log('Action:', action);
    // Handle actions from gamepad or voice control here
  };

  return (
    <>
      <GamepadControl onAction={handleAction} />
      <VoiceControl onCommand={handleAction} />
      <button className="" onClick={connectToDevice}>
        Connect HID
      </button>
    </>
  );
}
