// ColorChangerApp.js
import React, { useState } from "react";
import { View, Text, Button, StyleSheet, SafeAreaView } from "react-native";

export default function ColorChangerApp() {
  const [bg, setBg] = useState("#ffffff"); // default white

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: bg }}>
      <View style={[styles.container, { backgroundColor: bg }]}>
        <Text style={styles.title}>Color Changer App</Text>
        <View style={styles.buttonContainer}>
          <Button title="White" onPress={() => setBg("#ffffff")} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Light Blue" onPress={() => setBg("#ADD8E6")} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Light Green" onPress={() => setBg("#90EE90")} />
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
  buttonContainer: { 
    marginVertical: 8, 
    width: 200 
  }
});