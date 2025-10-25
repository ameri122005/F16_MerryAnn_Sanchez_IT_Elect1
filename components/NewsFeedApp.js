import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from "react-native";

import Ann from "../assets/Ann.jpg";

export default function NewsFeedApp({ navigation }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const scrollRef = useRef(null);

  // Scroll to bottom whenever comments change
  useEffect(() => {
    setTimeout(() => {
      scrollRef.current?.scrollToEnd({ animated: true });
    }, 100);
  }, [comments]);

  const addComment = () => {
    if (comment.trim() === "") return;
    const newComment = { id: Date.now().toString(), text: comment };
    setComments((prev) => [...prev, newComment]);
    setComment("");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 80}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            {/* Profile Picture */}
            <View style={{ alignItems: "center", marginBottom: 20 }}>
              <Image source={Ann} style={styles.profileImage} />
            </View>

            {/* Pink Card */}
            <View style={styles.card}>
              <View style={styles.row}>
                <Text style={styles.title}>NewsFeed</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Messenger")}>
                  <Image source={Ann} style={styles.avatarIcon} />
                </TouchableOpacity>
              </View>

              <Text style={styles.subtitle}>Breaking News</Text>
              <Text style={styles.content}>
                “Nepo babies” is a slang term used to describe children of
                celebrities or powerful people who benefit from their family
                connections in getting jobs, fame, or opportunities—especially
                in entertainment, fashion, or business.
              </Text>

              {/* Scrollable Comments */}
              <ScrollView
                style={styles.commentsContainer}
                contentContainerStyle={{ paddingBottom: 10 }}
                showsVerticalScrollIndicator={true}
                ref={scrollRef}
                keyboardShouldPersistTaps="handled"
              >
                {comments.map((item) => (
                  <View key={item.id} style={styles.comment}>
                    <Text>{item.text}</Text>
                  </View>
                ))}
              </ScrollView>

              {/* Comment Input */}
              <View style={styles.commentBar}>
                <TextInput
                  style={styles.commentInput}
                  value={comment}
                  onChangeText={setComment}
                  placeholder="Add a comment..."
                  placeholderTextColor="#777"
                  returnKeyType="send"
                  onSubmitEditing={addComment}
                  onFocus={() =>
                    scrollRef.current?.scrollToEnd({ animated: true })
                  }
                />
                <TouchableOpacity
                  style={styles.commentButton}
                  onPress={addComment}
                >
                  <Text style={styles.commentButtonText}>ADD</Text>
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
  safeArea: { flex: 1, backgroundColor: "skyblue" },
  container: { flex: 1, padding: 20 },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 3,
    borderColor: "white",
  },
  card: {
    backgroundColor: "pink",
    borderRadius: 15,
    padding: 12,
    flex: 1,
    width: "100%",
    maxWidth: 350,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 6,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  avatarIcon: {
    width: 35,
    height: 35,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: "white",
  },
  title: { fontSize: 22, fontWeight: "bold" },
  subtitle: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 10,
  },
  content: {
    fontSize: 14,
    color: "#333",
    textAlign: "justify",
    marginBottom: 10,
    lineHeight: 20,
  },
  commentsContainer: { flexGrow: 1, marginBottom: 10 },
  comment: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: "#eee",
    marginBottom: 6,
  },
  commentBar: { flexDirection: "row", alignItems: "center", marginTop: "auto" },
  commentInput: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  commentButton: {
    backgroundColor: "green",
    marginLeft: 8,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
  },
  commentButtonText: { color: "#fff", fontWeight: "bold" },
});