import React, {Component} from 'react';
import  {SafeAreaView, StyleSheet, Dimensions, View,} from 'react-native'
import Header from './src/components/Header'

class App extends Component{

  render() {
    return (
      <SafeAreaView >
        <View style={styles.container} >  
          <Header />
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      backgroundColor: '#fff'
  },
});

export default App;
