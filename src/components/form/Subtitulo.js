/**
 * Importante desse componente:
 * 
 * 1 - 
 */
 import React from 'react';
 import { Text, View } from 'react-native';
 import Estilo from '../../styles/estilo';
 
 export default (props) => {
     return (
         <View>
             <Text style={Estilo.fonteMedia}  >
                {props.subtitulo}
             </Text>
         </View>
     )
 }

 