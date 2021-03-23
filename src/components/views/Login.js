/**
 * Importante desse componente:
 * 
 * 1 - 
 */
import React, { Component, useState } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
// import Estilo from '../../styles/estilo';
import Estilo from '../../styles/estilo'
import Titulo from '../form/Titulo';
import Subtitulo from '../form/Subtitulo';

class Login extends Component{

    // 1 - inicializar o estado no construtor
    constructor(props){
        super(props);

        this.state = {
            email: props.usuario.email,
            password: props.usuario.senha,

            // isLoading: false,
        };

    }


    // 4 - métodos para alterar estado
    atualizarEstadoEmail(email){
        this.setState({email: email});
    }

    
    // 3 - método para efetuar o login
    efetuarLogin = () => {
        console.warn(this.state.email + ' - ' + this.state.senha);
    }


    // 2 -o retorno é na render
    render(){
        return (
            <View style={Estilo.form}>
                <Text style={Estilo.fonteGrande} >Área Restrita</Text>

                <TextInput 
                style={Estilo.input}
                placeholder='Informe o email'
                value={this.state.email}
                onChangeText={email => this.setState({email})}
                />

                <TextInput 
                style={Estilo.input}
                placeholder='Informe a senha'
                value={this.state.senha}
                onChangeText={senha => this.setState({senha})}
                secureTextEntry
                />

                <Button title="Entrar" onPress={this.efetuarLogin}  />

            </View>
        );
    }
}
export default Login;

