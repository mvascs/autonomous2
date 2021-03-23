/**
 * Importante desse componente:
 * 
 * 1 - sendo chamado de index.js
 */
import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import Login from './components/views/Login';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { LoginProvider } from './contextApi/LoginContextApi';

export default () => {
    // console.warn('teste okx'); // gera um warning na tela do app
    // console.warn(Object.keys(props));   // pra ver as props no warn
    return (
        // Envolver a aplicação com o LoginProvider
        <LoginProvider>
            <SafeAreaView style={style.App} >
                <Login usuario={{email: null, senha: null}}  />
            </SafeAreaView>

        </LoginProvider>
    );
}

// 2 - criar nossos estilos
const style = StyleSheet.create({
    App: {
        flexGrow: 1, // o número é o peso do componente na tela
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center', 
        padding: 20,

    }

});
