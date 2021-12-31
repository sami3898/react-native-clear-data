import * as React from 'react';

import { StyleSheet, View, Text, Button, Alert } from 'react-native';
import { clearAppData } from 'react-native-clear-data';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    
  }, []);

  // Display alert before removing data
  const alert = ()  => {
    Alert.alert(
      'Clear Data',
      'Clear Data will kill your application\nDo you want to Clear Data?',
      [
        {
          text: 'Yes',
          onPress: () => clearAppData()
        },
        {
          text: 'No',
          onPress: () => null
        },
      ]
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Geek</Text>
      <Text style={styles.desc}>Simple React Native library which allows to delete app data for android and iOS</Text>
      <Text style={styles.note}>Note: Removing data will kill your app current state. Use it with some prompt so user can not get worry about it</Text>
      <Button 
        title='Clear Data'
        onPress={() => alert()}
      />
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
  title: {
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'bold'
  },
  desc: {
    fontSize: 18,
    marginTop: 20,
    marginHorizontal: 20,
    textAlign: 'left'
  },
  note: {
    fontSize: 12,
    marginVertical: 20,
    marginHorizontal: 20,
    fontWeight: 'bold',
    color: 'red'
  }
});
