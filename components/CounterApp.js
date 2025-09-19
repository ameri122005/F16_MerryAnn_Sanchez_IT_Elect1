// CounterApp.js
import React, { useState } from "react";
import { View, Text, Button, StyleSheet, SafeAreaView } from "react-native";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#skyblue" }}>
      <View style={styles.container}>
        <Text style={styles.title}>Counter App</Text>
        <Text style={styles.count}>{count}</Text>

        <View style={styles.buttonContainer}>
          <Button title="Increment" onPress={() => setCount(count + 1)} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Decrement" onPress={() => setCount(count - 1)} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center" 
  },
  title: { 
    fontSize: 28, 
    fontWeight: "bold", 
    marginBottom: 20 
  },
  count: { 
    fontSize: 40, 
    marginVertical: 20 
  },
  buttonContainer: { 
    marginVertical: 8, 
    width: 200 
  }
});