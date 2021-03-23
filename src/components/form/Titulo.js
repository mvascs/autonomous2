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
             <Text style={Estilo.fonteGrande}  >
                {props.titulo}
             </Text>
         </View>
     )
 }