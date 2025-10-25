import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  Image,
} from "react-native";

import Ann from "../assets/Ann.jpg";

export default function MessengerNewsFeed() {
  const [messageText, setMessageText] = useState("");
  const [messages, setMessages] = useState([]);
  const listRef = useRef(null);

  const sendMessage = () => {
    const trimmed = messageText.trim();
    if (!trimmed) return;

    const sender = messages.length % 2 === 0 ? "me" : "friend";

    const newMessage = {
      id: Date.now().toString(),
      text: trimmed,
      sender,
    };

    setMessages((prev) => [...prev, newMessage]);
    setMessageText("");

    setTimeout(() => {
      listRef.current?.scrollToEnd({ animated: true });
    }, 50);
  };

  const renderItem = ({ item }) => {
    const isMe = item.sender === "me";
    return (
      <View
        style={[
          styles.messageRow,
          isMe ? styles.rowRight : styles.rowLeft,
        ]}
      >
        {!isMe && (
          <View style={styles.friendAvatar}>
            <Text style={styles.friendInitials}>F</Text>
          </View>
        )}

        <View
          style={[
            styles.messageBubble,
            isMe ? styles.bubbleMe : styles.bubbleFriend,
          ]}
        >
          <Text style={[styles.messageText, isMe ? styles.textMe : styles.textFriend]}>
            {item.text}
          </Text>
        </View>

        {isMe && <Image source={Ann} style={styles.myAvatar} />}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 80}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            {/* Pink Card */}
            <View style={styles.card}>
              <Text style={styles.title}>Messenger</Text>
              <Text style={styles.subtitle}>Chat (auto-alternate sender)</Text>

              {/* Messages FlatList */}
              <FlatList
                data={messages}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                ref={listRef}
                contentContainerStyle={{ paddingVertical: 6 }}
                onContentSizeChange={() => listRef.current?.scrollToEnd({ animated: true })}
                keyboardShouldPersistTaps="handled"
                style={{ flexGrow: 1 }}
              />

              {/* Input bar pinned to bottom */}
              <View style={[styles.inputBar, { marginTop: "auto" }]}>
                <TextInput
                  style={styles.input}
                  value={messageText}
                  onChangeText={setMessageText}
                  placeholder="Type a message..."
                  placeholderTextColor="#666"
                  returnKeyType="send"
                  onSubmitEditing={sendMessage}
                />
                <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                  <Text style={styles.sendButtonText}>SEND</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "skyblue",
  },
  inner: {
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: "pink",
    borderRadius: 15,
    padding: 12,
    width: "100%",
    maxWidth: 380,
    flex: 1, // fill remaining space
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 12,
    color: "#333",
  },
  messagesList: {
    paddingVertical: 6,
  },
  messageRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 8,
    maxWidth: "100%",
  },
  rowLeft: {
    justifyContent: "flex-start",
  },
  rowRight: {
    justifyContent: "flex-end",
  },
  friendAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#bbb",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  friendInitials: {
    color: "#fff",
    fontWeight: "700",
  },
  myAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginLeft: 8,
    borderWidth: 1,
    borderColor: "#fff",
  },
  messageBubble: {
    maxWidth: "75%",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "transparent",
  },
  bubbleFriend: {
    backgroundColor: "#fff",
    borderColor: "#eee",
    borderTopLeftRadius: 4,
  },
  bubbleMe: {
    backgroundColor: "#007bff",
    borderColor: "#0077ff",
    borderTopRightRadius: 4,
  },
  messageText: {
    fontSize: 14,
  },
  textFriend: {
    color: "#111",
  },
  textMe: {
    color: "#fff",
  },
  inputBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 8,
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: Platform.OS === "ios" ? 12 : 8,
    fontSize: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  sendButton: {
    marginLeft: 8,
    backgroundColor: "green",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
  },
  sendButtonText: {
    color: "#fff",
    fontWeight: "700",
  },
});