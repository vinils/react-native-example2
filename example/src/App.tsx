import { View, StyleSheet } from 'react-native';
import { Example2View } from 'react-native-example2';

export default function App() {
  return (
    <View style={styles.container}>
      <Example2View color="#32a852" style={styles.box} />
    </View>
  );
}

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
