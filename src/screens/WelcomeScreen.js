import React from 'react';

import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function WelcomeScreen({name, style}) {
  return (
    <View>
      <Text>Welcome Home!!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
