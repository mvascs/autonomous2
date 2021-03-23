/**
 * Importante desse componente:
 * 
 * 1 - 
 */
 import React from 'react';
 import { Button } from 'react-native';
//  import Estilo from '../../styles/estilo';

 export default (props) => {

    /**
     * se chamar essa função já com os parênteses, assim que carregar já vai executar.
     * Por isso está sendo chamada sem parênteses
     */
    function enviar(){
        console.warn('Enviado!!!');
    }


    return (
         <Button 
            title={props.title}
            // onPress={enviar}
         />
     )
 }