import { HID } from "~/components/controllers/hid.component";
import { MainScene } from "~/components/scene/main-scene.component";

export async function HomeComponent() {
  // const onchainData = await getOnchainData()

  return (
    <div>
      <h1>Welcome to the City VMall</h1>
      {/* <MainScene data={onchainData} /> */}
      <MainScene data={`Hello World!`} />
      <HID />
    </div>
  );
}