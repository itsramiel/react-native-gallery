import {mix, RoundedRect, useComputedValue} from '@shopify/react-native-skia';
import {SharedValue, useDerivedValue} from 'react-native-reanimated';
import {
  ACTIVE_VOLUME_COLOR,
  CENTER,
  HEIGHT_LG,
  HEIGHT_SM,
  INACTIVE_VOLUME_COLOR,
  MARGIN,
  RADIUS_LG,
  RADIUS_SM,
  WIDTH_DFF,
  WIDTH_LG,
  WIDTH_SM,
} from '../constants';

interface VolumeBarProps {
  active: SharedValue<number>;
  progress: SharedValue<number>;
}
export const VolumeBar = ({active, progress}: VolumeBarProps) => {
  const width = useDerivedValue(
    () => mix(active.value, WIDTH_SM, WIDTH_LG),
    [active],
  );
  const height = useDerivedValue(
    () => mix(active.value, HEIGHT_SM, HEIGHT_LG),
    [active],
  );

  const x = useDerivedValue(() => {
    return mix(active.value, MARGIN + WIDTH_DFF, MARGIN);
  }, [active]);

  const y = useDerivedValue(() => {
    return CENTER.y - height.value / 2;
  }, [height]);

  const animatedWidth = useDerivedValue(() => {
    return mix(progress.value, 0, width.value);
  }, [progress, width]);

  const radius = useComputedValue(() => {
    return mix(active.value, RADIUS_SM, RADIUS_LG);
  }, [active]);

  return (
    <>
      <RoundedRect
        width={width}
        height={height}
        x={x}
        y={y}
        r={radius}
        color={INACTIVE_VOLUME_COLOR}
      />
      <RoundedRect
        width={animatedWidth}
        height={height}
        x={x}
        y={y}
        r={radius}
        color={ACTIVE_VOLUME_COLOR}
      />
    </>
  );
};
