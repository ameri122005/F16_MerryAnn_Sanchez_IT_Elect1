import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";


export default function MessengerApp() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessenger = () => {
    if (message.trim() === "") return;
    const newMessage = { id: Date.now().toString(), text: message };
    setMessages((prev) => [...prev, newMessage]);
    setMessage("");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.card}>
        <Text style={styles.title}>Messenger</Text>

        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.messageBubble}>
              <Text style={styles.messageText}>{item.text}</Text>
            </View>
          )}
          style={{ maxHeight: 150 }}
        />

        <View style={styles.messengerBar}>
          <TextInput
            style={styles.messengerInput}
            value={message}
            onChangeText={setMessage}
            placeholder="Type your message..."
          />
          <TouchableOpacity style={styles.messengerButton} onPress={sendMessenger}>
            <Text style={styles.messengerButtonText}>SEND</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "skyblue", padding: 30 },
  card: {
    backgroundColor: "pink",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  messengerBar: { flexDirection: "row", alignItems: "center", marginTop: 60 },
  messengerInput: {
    flex: 1,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: "#f9f9f9",
  },
  messengerButton: {
    backgroundColor: "#007bff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 6,
    marginLeft: 8,
  },
  messengerButtonText: { color: "white", fontWeight: "bold" },
  messageBubble: {
    backgroundColor: "#e4e6eb",
    padding: 8,
    borderRadius: 6,
    marginBottom: 5,
    alignSelf: "flex-start",
  },
  messageText: { fontSize: 14, color: "#000" },
});
