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

export default function App() {
  const [message, setMessage] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [messages, setMessages] = useState([]);

  // Handle messenger send
  const sendMessenger = () => {
    if (message.trim() === "") return;
    const newMessage = { id: Date.now().toString(), text: message };
    setMessages((prev) => [...prev, newMessage]);
    setMessage("");
  };

  // Handle adding a comment
  const addComment = () => {
    if (comment.trim() === "") return;
    const newComment = { id: Date.now().toString(), text: comment };
    setComments((prev) => [...prev, newComment]);
    setComment("");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* Messenger Section */}
      <View style={styles.card}>
        <Text style={styles.title}>Messenger</Text>

        {/* Messenger Messages */}
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

        {/* Input + Send Button */}
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

      {/* News Feed Post */}
      <View style={styles.card}>
        <Text style={styles.title}>NewsFeed</Text>
        <Text style={styles.subtitle}>Breaking News</Text>
        <Text style={styles.content}>
“Nepo babies” is a slang term (short for nepotism babies) used to describe children of celebrities, wealthy families, or powerful people who benefit from their family connections in getting jobs, fame, or opportunities—especially in industries like entertainment, fashion, and business.

        </Text>

        {/* Existing Comments */}
        <FlatList
          data={comments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.comment}>
              <Text>{item.text}</Text>
            </View>
          )}
        />

        {/* Add Comment Box */}
        <View style={styles.commentBar}>
          <TextInput
            style={styles.commentInput}
            value={comment}
            onChangeText={setComment}
            placeholder="Add a comment..."
          />
          <TouchableOpacity style={styles.commentButton} onPress={addComment}>
            <Text style={styles.commentButtonText}>ADD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
    padding: 30,
  },
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
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  content: {
    fontSize: 14,
    marginBottom: 10,
    color: "#333",
  },

  // Messenger
  messengerBar: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 60,
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

  // Comments
  commentBar: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  commentInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 14,
  },
  commentButton: {
    backgroundColor: "#28a745",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    marginLeft: 8,
  },
  commentButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  comment: {
    padding: 8,
    backgroundColor: "#f9f9f9",
    borderRadius: 6,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: "#eee",
  },
});