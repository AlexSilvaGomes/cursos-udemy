
import React from 'react';
import { View, StyleSheet} from 'react-native';
import MinMax from './components/MinMax'
//import Primeiro from './components/Primeiro'
//import X, {Comp1, Comp2} from './components/Mult'

export default () => (
  <View style={style.App}>  
     <MinMax min={3} max={20}></MinMax>
    {/* <Primeiro></Primeiro>
    <Comp1></Comp1>
    <Comp2></Comp2>
    <X></X> */}
  </View>
)


 const style = StyleSheet.create({

    App: {
      fontSize: 50,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20
    }

 })