
import { Colors } from '@/constants/Colors';
import { Theme } from '@react-navigation/native';

export const LightTheme: Theme = {
  dark: false,
  colors: {
    primary: Colors.light.tint,
    background: Colors.light.background,
    card: Colors.light.background,
    text: Colors.light.text,
    border: '#E5E7EB',
    notification: Colors.light.tint,
  },
  fonts: {
      regular: {
        fontFamily: 'Pretendard-Regular',
        fontWeight: '400',
      },
      medium: {
        fontFamily: 'Pretendard-Medium',
        fontWeight: '500',
      },
      bold: {
        fontFamily: 'Pretendard-Bold',
        fontWeight: '600',
      },
      heavy: {
        fontFamily: 'Pretendard-Bold',
        fontWeight: '700',
      },
    },
};

export const DarkTheme: Theme = {
  dark: true,
  colors: {
    primary: Colors.dark.tint,
    background: Colors.dark.background,
    card: Colors.dark.background,
    text: Colors.dark.text,
    border: '#2D3235',
    notification: Colors.dark.tint,
  },
  fonts: {
    regular: {
      fontFamily: 'Pretendard-Regular',
      fontWeight: '400',
    },
    medium: {
      fontFamily: 'Pretendard-Medium',
      fontWeight: '500',
    },
    bold: {
      fontFamily: 'Pretendard-Bold',
      fontWeight: '600',
    },
    heavy: {
      fontFamily: 'Pretendard-Bold',
      fontWeight: '700',
    },
  },
}; 