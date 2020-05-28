import React from 'react';
import {AppNavigator} from './src/system';
import {View} from 'react-native';

function App() {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <AppNavigator />
    </View>
  );
}

export default App;
