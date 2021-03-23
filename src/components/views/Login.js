/**
 * Importante desse componente:
 * 
 * 1 - 
 */
import React, { Component, useContext, useState } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import Estilo from '../../styles/estilo'
import Titulo from '../form/Titulo';
import Subtitulo from '../form/Subtitulo';
import LoginContext from '../../context/LoginContext';



export default (props) => {

    // 2 - instanciar as variáveis do estado
    const [email, setEmail] = useState(props.email);
    const [senha, setSenha] = useState(props.senha);


    const ctx = useContext(LoginContext);
    console.warn(ctx);



    // 3 - método para efetuar o login
    efetuarLogin = () => {
        console.warn(email.email + ' - ' + senha.senha);
    }



    // 1 - retorno
    return (
        <View style={Estilo.form}>
            <Text style={Estilo.fonteGrande} >Área Restrita</Text>

            <TextInput 
            style={Estilo.input}
            placeholder='Informe o email'
            // value={email}
            onChangeText={email => setEmail({email})}
            />

            <TextInput 
            style={Estilo.input}
            placeholder='Informe a senha'
            // value={senha}
            onChangeText={senha => setSenha({senha})}
            secureTextEntry
            />

            <Button title="Entrar" onPress={efetuarLogin}  />

        </View>
    );
 }