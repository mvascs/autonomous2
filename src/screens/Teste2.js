import React, { Component } from 'react'
import {
    StyleSheet, Text, View, Platform, Image
} from 'react-native'
import icon from '../../assets/imgs/icon.png'

class Teste2 extends Component{

    render() {
        return (
            <View style={styles.rowContainer} >
                <Text style={styles.title} >Tela teste 2</Text>
            </View>
        )
    }
}

export default Teste2;