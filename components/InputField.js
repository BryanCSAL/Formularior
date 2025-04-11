import React from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';

export default function InputField({ label, value, onChange, keyboardType = 'default' }) {
  return (
    <>
      <Text>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChange}
        keyboardType={keyboardType}
        placeholder={`Digite ${label.toLowerCase()}`}
      />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 5,
  },
});
