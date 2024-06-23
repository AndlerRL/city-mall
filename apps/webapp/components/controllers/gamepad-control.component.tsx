// app/components/GamepadControl.jsx
'use client';

import { useState } from 'react';
import Gamepad from 'react-gamepad';

export function GamepadControl({ onAction }) {
  const [connected, setConnected] = useState(false);

  const handleButtonDown = (buttonName) => {
    if (onAction) onAction(buttonName);
  };

  return (
    <Gamepad
      onConnect={() => setConnected(true)}
      onDisconnect={() => setConnected(false)}
      onButtonDown={handleButtonDown}
    >
      <div>
        {connected ? 'Gamepad Connected' : 'Connect your gamepad'}
      </div>
    </Gamepad>
  );
};
