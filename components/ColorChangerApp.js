import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function ColorChangerApp() {
  const [bgColor, setBgColor] = useState('white');

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <View style={styles.row}>
        <View style={styles.spacerRight}>
          <Button title="White" onPress={() => setBgColor('white')} />
        </View>
        <View style={styles.spacerRight}>
          <Button title="Light Blue" onPress={() => setBgColor('lightblue')} />
        </View>
        <Button title="Light Green" onPress={() => setBgColor('lightgreen')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { height: 300, justifyContent: 'center', alignItems: 'center' },
  row: { flexDirection: 'row', alignItems: 'center' },
  spacerRight: { marginRight: 10 },
});