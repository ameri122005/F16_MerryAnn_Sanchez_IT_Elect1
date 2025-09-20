
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

  // Add a new message to the list
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
      {/* Card that stays fixed height */}
      <View style={styles.card}>
        <Text style={styles.title}>Messenger</Text>

        {/* Scrollable message list */}
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.messageBubble}>
              <Text style={styles.messageText}>{item.text}</Text>
            </View>
          )}
          style={styles.messageList}       // 👈 keeps list inside fixed area
        />

        {/* Input + Send button */}
        <View style={styles.messengerBar}>
          <TextInput
            style={styles.messengerInput}
            value={message}
            onChangeText={setMessage}
            placeholder="Type your message..."
          />
          <TouchableOpacity
            style={styles.messengerButton}
            onPress={sendMessenger}
          >
            <Text style={styles.messengerButtonText}>SEND</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

// 🎨 Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
    padding: 30,
    justifyContent: "center",
  },
  card: {
    backgroundColor: "pink",
    padding: 15,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,

    // 🔒 FIXED HEIGHT so card never stretches
    height: 300,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  // The scrolling area inside the card
  messageList: {
    flexGrow: 0,
    maxHeight: 150,
    marginBottom: 10,
  },
  messageBubble: {
    backgroundColor: "#e4e6eb",
    padding: 8,
    borderRadius: 6,
    marginBottom: 5,
    alignSelf: "flex-start",
  },
  messageText: {
    fontSize: 14,
    color: "#000",
  },
  messengerBar: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "auto", // sticks to bottom of card
  },
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
  messengerButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});


