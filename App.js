import React from 'react';
import { ScrollView, View } from 'react-native';
import CounterApp from './components/CounterApp';
import ColorChangerApp from './components/ColorChangerApp';

export default function App() {
  return (
<ScrollView contentContainerStyle={{
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'skyblue'   // <-- Set the background color
}}>
<View style={{ width: '80%', marginBottom: 40 }}>
    <CounterApp />
</View>

<View style={{ width: '80%', marginBottom: 40 }}>
    <ColorChangerApp />
</View>
    </ScrollView>
  );
}
