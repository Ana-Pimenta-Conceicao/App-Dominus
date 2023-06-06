//biblioteca do firebase

import firebase from 'firebase/compat/app';

//autenticação de email e senha

import 'firebase/compat/auth';

//trabalha com o banco de dados criado no firebase

import 'firebase/compat/database';

let firebaseConfig = {
  apiKey: "AIzaSyD92kxRftqoXwTj3sdzFiyWQ4BooECsCmo",
  authDomain: "appdominus-4b2f9.firebaseapp.com",
  databaseURL: "https://appdominus-4b2f9-default-rtdb.firebaseio.com",
  projectId: "appdominus-4b2f9",
  storageBucket: "appdominus-4b2f9.appspot.com",
  messagingSenderId: "308874341737",
  appId: "1:308874341737:web:bbe3427043e209491261f8"
};

if(!firebase.apps.lenght){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;