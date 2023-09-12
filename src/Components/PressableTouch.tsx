import React, { ReactNode } from 'react';
import { Pressable, Platform } from 'react-native';
import styles from '../styles';

interface PressableTouchProps {
  accessibilityLabel?: string;
  rippleColor?: string;
  disabled?: boolean;
  children: ReactNode;
  onPress: () => void;
}

const PressableTouch: React.FC<PressableTouchProps> = props => {
  const { accessibilityLabel, rippleColor, disabled, onPress, children } = props;

  return (
    <Pressable
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        {
          backgroundColor:
            pressed && Platform.OS === 'ios' ? rippleColor : 'transparent',
        },
        styles.rippleStyle,
      ]}
      android_ripple={{ color: rippleColor }}
    >
      {children}
    </Pressable>
  );
};

export default PressableTouch;
