import {Group, Path} from '@shopify/react-native-skia';
import {
  SharedValue,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  ARC_LG_PATH,
  ARC_MD_PATH,
  ARC_SM_PATH,
  ICONS_HEIGHT,
  ICON_COLOR,
  MARGIN,
  PADDING,
  SCREEN_HEIGHT,
  SPEAKER_PATH,
} from '../constants';

interface VolumeIconProps {
  progress: SharedValue<number>;
}
export const VolumeIcon = ({progress}: VolumeIconProps) => {
  const opacity_sm = useDerivedValue(() => {
    return withTiming(progress.value > 0.01 ? 1 : 0);
  }, [progress]);
  const opacity_md = useDerivedValue(() => {
    return withTiming(progress.value > 0.4 ? 1 : 0);
  }, [progress]);
  const opacity_lg = useDerivedValue(() => {
    return withTiming(progress.value > 0.8 ? 1 : 0);
  }, [progress]);

  const mute = useDerivedValue(() => {
    return withTiming(progress.value > 0.01 ? 1 : 0);
  }, [progress]);
  return (
    <Group
      transform={[
        {translateY: SCREEN_HEIGHT / 2 - ICONS_HEIGHT / 2},
        {translateX: MARGIN + PADDING},
      ]}>
      <Group blendMode={'difference'}>
        <Path path={SPEAKER_PATH.path} color={ICON_COLOR} />
        <Path
          path={ARC_SM_PATH.path}
          opacity={opacity_sm}
          color={ICON_COLOR}
          transform={[
            {translateX: SPEAKER_PATH.width},
            {translateY: (SPEAKER_PATH.height - ARC_SM_PATH.height) / 2},
          ]}
        />
        <Path
          path={ARC_MD_PATH.path}
          opacity={opacity_md}
          color={ICON_COLOR}
          transform={[
            {translateX: SPEAKER_PATH.width + ARC_SM_PATH.width},
            {translateY: (SPEAKER_PATH.height - ARC_MD_PATH.height) / 2},
          ]}
        />
        <Path
          path={ARC_LG_PATH.path}
          color={ICON_COLOR}
          opacity={opacity_lg}
          transform={[
            {
              translateX:
                SPEAKER_PATH.width + ARC_SM_PATH.width + ARC_MD_PATH.width,
            },
            {translateY: (SPEAKER_PATH.height - ARC_LG_PATH.height) / 2},
          ]}
        />
      </Group>
      <Path
        path={'M 4 6 L 21 23 L 23 21 L 6 4 Z'}
        color={'black'}
        start={mute}
      />
      <Path
        path={'M 4.5 5.5 L 21.5 22.5 L 22.5 21.5 L 5.5 4.5 Z'}
        color={ICON_COLOR}
        start={mute}
      />
    </Group>
  );
};
