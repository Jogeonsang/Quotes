import { StyleSheet, View } from 'react-native';

import { Text } from '@/components/ui/Text';
import { useTheme } from '@react-navigation/native';

export default function HomeScreen() {
  const { colors } = useTheme();

  return (
    <View style={[styles.root, { backgroundColor: colors.background }]}>
      <Text type="title">Welcome!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  }
});
