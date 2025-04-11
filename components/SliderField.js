import React from 'react';
import { Text, Slider } from 'react-native';

export default function SliderField({ label, value, onChange }) {
  return (
    <>
      <Text>{label} {value.toFixed(0)}</Text>
      <Slider
        minimumValue={0}
        maximumValue={5000}
        step={100}
        value={value}
        onValueChange={onChange}
      />
    </>
  );
}
