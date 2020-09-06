import React from 'react';

import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function TextButton({title, style, onPress}) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 8,
  },

  text: {
    color: 'purple',
    fontWeight: '500',
    fontSize: 16,
  },
});
