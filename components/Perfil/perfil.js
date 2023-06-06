import React, { useState, useEffect, useRef } from 'react';
import {
    View, Text, StyleSheet, Button,
    TouchableOpacity, Keyboard, FlatList, ActivityIndicator
} from 'react-native';
import { TextInput } from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome5';
import firebase from '../../services/connectionFirebase';

export default function GerenciarPerfil() {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [idade, setIdade] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [key, setKey] = useState('');

    //implementação dos métodos update ou insert 
    async function insertUpdate() {
        //editar dados 
        if (nome !== '' & telefone !== ''  & idade !== '' & cidade !== '' & estado !== '' & key !== '') {
            firebase.database().ref('perfil').child(key).update({
                nome: nome, 
                telefone: telefone, 
                idade: idade, 
                cidade: cidade, 
                estado: estado,
            })

            Keyboard.dismiss();
            alert('Perfil Cadastrado!');
            clearFields();
            setKey('');
            return;
        }

        //cadastrar dados 
        let produtos = await firebase.database().ref('perfil');
        let chave = produtos.push().key; //comando para salvar é o push 

        produtos.child(chave).set({
            nome: nome, 
            telefone: telefone, 
            idade: idade, 
            cidade: cidade,
            estado: estado,
        });

        Keyboard.dismiss();

        alert('Produto Cadastrado!');
        clearFields();

        //método para limpar os campos com valores
        function clearFields(){
            setNome('');
            setTelefone('');
            setIdade('');
            setCidade('');
            setEstado('');
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Nome'
                left={<TextInput.Icon icon="account" />}
                maxLength={40}
                style={styles.input}
                onChangeText={(text) => setNome(text)}
                value={nome}
            />

            <TextInput
                placeholder='Telefone'
                left={<TextInput.Icon icon="phone" />}
                style={styles.input}
                onChangeText={(text) => setTelefone(text)}
                value={telefone}
            />

            <TextInput
                placeholder='Idade'
                left={<TextInput.Icon icon="counter" />}
                style={styles.input}
                onChangeText={(text) => setIdade(text)}
                value={idade}
            />

            <TextInput
                placeholder='Cidade'
                left={<TextInput.Icon icon="map-marker-radius" />}
                style={styles.input}
                onChangeText={(text) => setCidade(text)}
                value={cidade}
            />
            <TextInput
                placeholder='Estado'
                left={<TextInput.Icon icon="map" />}
                style={styles.input}
                onChangeText={(text) => setEstado(text)}
                value={estado}
            />
            <View style={styles.button}>
                <Button
                    onPress={insertUpdate}
                    title="Adicionar"
                    color="#836FFF"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        margin: 10,
        alignContent: 'center'
    },



    input: {
        borderWidth: 1,
        borderColor: '#121212',
        height: 40,
        fontSize: 13,
        borderRadius: 8,
        marginBottom: 10
    },

    separator: {
        marginVertical: 5,
    },

    button: {
        flexDirection: 'column',
        alignItems: 'center',
        //backgroundColor: '#141414',
        //borderWidth: 0.5,
        height: 60,
        borderRadius: 5,
        margin: 5,
    },

    buttonImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },

    buttonTextStyle: {
        color: '#fff',
        marginBottom: 4,
        marginLeft: 100,
        fontSize: 20
    },

    buttonIconSeparatorStyle: {
        backgroundColor: '#fff',
        width: 1,
        height: 20,
    },

    listar: {
        fontSize: 20,
        textAlign: 'center'
    }
}); 