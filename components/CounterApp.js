import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>{count}</Text>
      <View style={styles.buttonRow}>
        <Button title="Increase" onPress={() => setCount(count + 1)} />
        <View style={{ width: 10 }} />
        <Button title="Decrease" onPress={() => setCount(count - 1)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  countText: {
    fontSize: 40,
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
  },
});