import React from 'react';
import { SafeAreaView } from 'react-native';
import SorteadorScreen from './src/screens/SorteadorScreen';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SorteadorScreen />
    </SafeAreaView>
  );
};

export default App;
