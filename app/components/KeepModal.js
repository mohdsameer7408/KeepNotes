import React, { useEffect, useState } from "react";
import { Modal, StyleSheet, Text, TextInput, View } from "react-native";

import KeepButton from "./KeepButton";

const KeepModal = ({
  isModalVisible,
  setIsModalVisible,
  titleText,
  noteText,
  addANoteHandler,
}) => {
  const [title, setTitle] = useState(titleText);
  const [note, setNote] = useState(noteText);

  useEffect(() => {
    setTitle(titleText);
    setNote(noteText);
  }, [titleText, noteText]);

  const addOrUpdateNote = () => {
    addANoteHandler(title, note, titleText ? "edit" : "add");
    setTitle("");
    setNote("");
  };

  return (
    <Modal visible={isModalVisible} animationType="slide">
      <View style={styles.addKeep}>
        <KeepButton
          style={styles.cancelButton}
          onButtonPress={setIsModalVisible}
        >
          <Text style={styles.cancelButtonText}>&times;</Text>
        </KeepButton>
        <View style={styles.keepForm}>
          <Text style={styles.addKeepTitle}>
            {titleText ? "Edit your note" : "Add a Note"}
          </Text>
          <TextInput
            placeholder="Title"
            style={styles.inputTitle}
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
          <TextInput
            placeholder="note"
            style={styles.inputTitle}
            numberOfLines={5}
            multiline
            scrollEnabled
            value={note}
            onChangeText={(text) => setNote(text)}
          />
          <KeepButton
            style={styles.addKeepButton}
            color="#FBBC04"
            onButtonPress={addOrUpdateNote}
          >
            <Text>{titleText ? "Update" : "Add"}</Text>
          </KeepButton>
        </View>
      </View>
    </Modal>
  );
};

export default KeepModal;

const styles = StyleSheet.create({
  addKeep: {
    flex: 1,
  },
  cancelButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignSelf: "flex-end",
  },
  cancelButtonText: {
    fontSize: 36,
  },
  keepForm: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 100,
    paddingHorizontal: 20,
  },
  addKeepTitle: {
    fontSize: 28,
    marginVertical: 20,
  },
  inputTitle: {
    width: "100%",
    maxHeight: 300,
    borderBottomColor: "#ccc",
    borderBottomWidth: 2,
    minHeight: 50,
    fontSize: 18,
  },
  addKeepButton: {
    marginVertical: 30,
    width: 100,
    height: 40,
    borderRadius: 8,
  },
});
