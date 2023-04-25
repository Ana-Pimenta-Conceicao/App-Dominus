import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity
} from 'react-native';
import { TextInput } from 'react-native-paper';
import firebase from '../../services/connectionFirebase';

const Separator = () => <View style={styles.separator} />;

export default function Login({ changeStatus }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('login');

  function handleLogin() {
    if (type === 'login') {
      // Aqui fazemos o login 
      const user = firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => { 
          changeStatus(user.user.uid) }).
        catch((err) => {
          console.log(err);
          alert('Email ou senha não cadastrados!');
          return;
        })
    } else {
      // Aqui cadastramos o usuario 
      const user = firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => { 
          changeStatus(user.user.uid) })
        .catch((err) => {
          console.log(err);
          alert('Erro ao Cadastrar!');
          return;
        })
    }
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.dominus}
        source={require('../../assets/dominus.png')}></Image>
      <SafeAreaView>

        <TextInput
          label="E-mail"
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          right={<TextInput.Icon icon="email" />}
        />

        <TextInput
          style={styles.input}
          //mode="outlined"
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
        />
        <Separator />
       

      </SafeAreaView>

      <TouchableOpacity
        style={[styles.handleLogin,
        { backgroundColor: type === 'login' ? '#836FFF' : '#836FFF' }]}
        onPress={handleLogin}
      >
        <Text style={styles.loginText}>
          {type === 'login' ? 'Acessar' : 'Cadastrar'}
        </Text>
      </TouchableOpacity>



      <TouchableOpacity onPress={() => setType(type => type === 'login' ? 'cadastrar' : 'login')} >
        <Text style={{ textAlign: 'center' }}>
          {type === 'login' ? 'Criar uma conta' : 'Já possuo uma conta'}
        </Text>
      </TouchableOpacity></View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 8,
    alignContent: 'center',
  },
  dominus: {
    alignContent: 'center',
    margin: 'auto',
    width: 300,
    height: 300,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#DFB4FF',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  input: {
    alignContent: 'auto',
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#FFF',
    borderRadius: 4,
    height: 30,
    padding: 10,
    borderWidth: 2,
    borderColor: '#141414',
    alignIcon: 'center'
  },

  loginText: {
    textAlign: 'center',
    color: '#fff'
  }
});
