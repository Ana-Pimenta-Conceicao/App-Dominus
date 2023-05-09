import React, { useState, useEffect, useRef } from 'react'; 

import { 

    View, Text, StyleSheet, 

    TouchableOpacity, Keyboard, FlatList, ActivityIndicator 

} from 'react-native'; 

import { TextInput } from 'react-native-paper'; 

export default function GerenciarProdutos(){

    const [nome, setNome] = useState(''); 
    const [descricao, setDescricao] = useState(''); 
    const [tipo, setTipo] = useState(''); 
    const [preco, setPreco] = useState(''); 
    const [key, setKey] = useState(''); 
    return ( 

        <View style={styles.container}> 

            <TextInput 
                placeholder='Nome' 
                left={<TextInput.Icon icon="nome" />} 
                maxLength={40} 
                style={styles.input} 
                onChangeText={(texto) => setName(texto)} 
                value={name} 
            /> 

            <TextInput 
                placeholder='Descricao' 
                left={<TextInput.Icon icon="descricao" />} 
                style={styles.input} 
                onChangeText={(texto) => setBrand(texto)} 
                value={brand} 

            /> 
            
            <TextInput 
                placeholder='Tipo' 
                left={<TextInput.Icon icon="tipo" />} 
                style={styles.input} 
                onChangeText={(texto) => setColor(texto)} 
                value={color} 

            />  
            <TextInput 
                placeholder='Preço' 
                left={<TextInput.Icon icon="sack" />} 
                style={styles.input} 
                onChangeText={(texto) => setPrice(texto)} 
                value={price} 

            /> 

                            

        </View> 

    ); 

} 

 
