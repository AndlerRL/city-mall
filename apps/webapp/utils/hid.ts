// Add HID to the navigator object
declare global {
  interface Navigator {
    hid: {
      requestDevice: (options: any) => Promise<any[]>;
    };
  }
}

async function connectToDevice() {
  const filters = [{ vendorId: 0x1234, productId: 0x5678 }];
  const [device] = await navigator.hid.requestDevice({ filters });

  if (!device) return;

  await device.open();
  device.addEventListener('inputreport', event => {
    const { data } = event;
    // Handle data from the device
  });
}

export { connectToDevice };

