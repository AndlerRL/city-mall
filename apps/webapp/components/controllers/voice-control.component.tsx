// app/components/VoiceControl.jsx
'use client';

import annyang from 'annyang';
import { useEffect } from 'react';

export function VoiceControl({ onCommand }) {
  useEffect(() => {
    if (annyang) {
      const commands = {
        'move forward': () => onCommand('moveForward'),
        'move backward': () => onCommand('moveBackward'),
        'turn left': () => onCommand('turnLeft'),
        'turn right': () => onCommand('turnRight'),
      };

      annyang.addCommands(commands);
      annyang.start();
    }
  }, [onCommand]);

  return <div>Voice Control Active</div>;
};
