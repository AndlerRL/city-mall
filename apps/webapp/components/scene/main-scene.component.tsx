import { CanvasScene } from "~/components/scene/canvas-scene.component";
import OnchainHub from "./onchain-hub.component";

export function MainScene({ data }: { data: any }) {
  return (
    <div>
      <h1>Main Scene</h1>
      <CanvasScene />
      <OnchainHub data={data} />
    </div>
  );
}