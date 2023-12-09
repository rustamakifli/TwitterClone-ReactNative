import { Text, SafeAreaView, View,FlatList, Image, TouchableOpacity,StyleSheet } from 'react-native';
import TwitterHome from './components/TwitterHome';



export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <TwitterHome/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

});
