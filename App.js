import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        style={{
          height: 50,
          width: 120,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'red',
        }}>
        <Text>Press Me 1</Text>
      </TouchableOpacity>
      <Text>This was Added in 3rd realese</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
