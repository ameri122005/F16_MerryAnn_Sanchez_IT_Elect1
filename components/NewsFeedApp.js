
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";

export default function NewsFeedApp() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const addComment = () => {
    if (comment.trim() === "") return;
    const newComment = { id: Date.now().toString(), text: comment };
    setComments((prev) => [...prev, newComment]);
    setComment("");
  };

  return (
    <View style={styles.container}>
      {/* Card with fixed height */}
      <View style={styles.card}>
        <ScrollView style={styles.articleArea}>
          <Text style={styles.title}>NewsFeed</Text>
          <Text style={styles.subtitle}>Breaking News</Text>
          <Text style={styles.content}>
            “Nepo babies” is a slang term (short for nepotism babies) used to
            describe children of celebrities, wealthy families, or powerful
            people who benefit from their family connections in getting jobs,
            fame, or opportunities—especially in industries like entertainment,
            fashion, and business.
          </Text>
        </ScrollView>

        {/* Scrollable comments */}
        <FlatList
          data={comments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.comment}>
              <Text>{item.text}</Text>
            </View>
          )}
          style={styles.commentList}
        />

        {/* Comment input */}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
    padding: 30,
    justifyContent: "center",
  },
  card: {
    backgroundColor: "pink",
    padding: 12,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,

    // ✅ Fixed size so it doesn’t stretch
    height: 400,
  },
  articleArea: {
    maxHeight: 140, // scroll only the article text
    marginBottom: 5,
  },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 6 },
  subtitle: { fontSize: 16, fontWeight: "600", marginBottom: 9},
  content: { fontSize: 14, color: "#333" },

  commentList: {
    flexGrow: 0,
    maxHeight: 120, // separate scroll for comments
    marginBottom: 10,
  },
  commentBar: { flexDirection: "row", alignItems: "center" },
  commentInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 14,
    backgroundColor: "#f9f9f9",
  },
  commentButton: {
    backgroundColor: "#28a745",
    paddingHorizontal: 12,
 paddingVertical: 8,
    borderRadius: 6,
    marginLeft: 8,
  },
  commentButtonText: { color: "white", fontWeight: "bold" },
  comment: {
    padding: 8,
    backgroundColor: "#f9f9f9",
    borderRadius: 6,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: "#eee",
  },
});

