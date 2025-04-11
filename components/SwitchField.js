import React from 'react';
import { Text, Switch } from 'react-native';

export default function SwitchField({ label, value, onChange }) {
  return (
    <>
      <Text>{label}</Text>
      <Switch value={value} onValueChange={onChange} />
    </>
  );
}
