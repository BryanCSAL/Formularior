import React from 'react';
import { Text, Picker, StyleSheet } from 'react-native';

export default function PickerField({ label, selectedValue, onChange, options = [] }) {
  return (
    <>
      <Text>{label}</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onChange}
        style={styles.picker}
      >
        {options.map((item, index) => (
          <Picker.Item label={item} value={item} key={index} />
        ))}
      </Picker>
    </>
  );
}

const styles = StyleSheet.create({
  picker: {
    height: 50,
    marginBottom: 10,
  },
});
