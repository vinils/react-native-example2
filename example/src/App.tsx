import { StatusBar, StyleSheet, useColorScheme, View, Text } from 'react-native';
import { Example2View } from 'react-native-example2';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
      <Example2View color="#32a852" style={styles.box} />
    </View>
  );
}

function AppContent() {
  return (
    <View style={styles2.container}>
      <Text>Result: </Text>
    </View>
  );
}

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
