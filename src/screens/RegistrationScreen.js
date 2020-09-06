import React, {useState} from 'react';

import {View, StyleSheet, Text} from 'react-native';
import Heading from '../components/Heading';
import Input from '../components/Input';
import FilledButton from '../components/FiiledButton';
import TextButton from '../components/TextButton';
import Error from '../components/Error';
import IconButton from '../components/IconButton';

function handleClick(username, password) {
  console.log(username);
  console.log(password);
  console.log('test');
  fetch('http://192.168.43.35:8000/create_user', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName: username,
      lastName: password,
    }),
  });
}
export default function RegistrationScreen({navigation}) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <IconButton
        style={styles.closeIcon}
        name={'close-circle-outline'}
        onPress={() => {
          navigation.pop();
        }}
      />

      <Heading style={styles.title}> REGISTRATION</Heading>

      <Error error={''} />
      <Input
        name="email"
        style={styles.input}
        placeholder={'Email'}
        keyboardType={'email-address'}
        onChangeText={(username) => setUserName(username)}
      />
      <Input
        style={styles.input}
        name="pass"
        placeholder={'Password'}
        secureTextEntry
        onChangeText={(password) => setPassword(password)}
      />
      <FilledButton
        title={'Register'}
        style={styles.loginButton}
        onPress={() => handleClick(username, password)}></FilledButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 120,
    alignItems: 'center',
  },
  title: {
    marginBottom: 48,
  },

  input: {
    marginVertical: 8,
  },

  loginButton: {
    marginVertical: 32,
  },

  closeIcon: {
    position: 'absolute',
    top: 60,
    right: 16,
  },
});
