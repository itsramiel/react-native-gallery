import {
  Canvas,
  clamp,
  Spring,
  useTouchHandler,
} from "@shopify/react-native-skia";
import { useSharedValue, withSpring } from "react-native-reanimated";

import { VolumeBar, VolumeIcon } from "./VolumePrecisionScreen/components";
import { SCREEN_BG_COLOR, WIDTH_LG } from "./VolumePrecisionScreen/constants";

export const VolumePrecisionScreen = () => {
  const active = useSharedValue(0);
  const xCtx = useSharedValue(0);
  const progressCtx = useSharedValue(0);
  const progress = useSharedValue(0);
  const touchHandler = useTouchHandler({
    onStart: (e) => {
      active.value = withSpring(1, Spring.Config.Stiff);
      xCtx.value = e.x;
      progressCtx.value = progress.value;
    },
    onActive: (e) => {
      const diff = e.x - xCtx.value;
      progress.value = withSpring(
        clamp(progressCtx.value + diff / (0.7 * WIDTH_LG), 0, 1),
        { overshootClamping: true }
      );
    },
    onEnd: () => {
      active.value = withSpring(0, Spring.Config.Stiff);
    },
  });
  return (
    <Canvas
      style={{ flex: 1, backgroundColor: SCREEN_BG_COLOR }}
      onTouch={touchHandler}
    >
      <VolumeBar active={active} progress={progress} />
      <VolumeIcon progress={progress} />
    </Canvas>
  );
};
