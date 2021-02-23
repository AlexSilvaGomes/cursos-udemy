
import React from 'react';
import { View, StyleSheet} from 'react-native'
import Contador from './components/Contador'
// import MinMax from './components/MinMax'
import Botao from './components/Botao'
//import Primeiro from './components/Primeiro'
//import X, {Comp1, Comp2} from './components/Mult'

export default () => (
  <View style={style.App}>  
    <Contador inicial={100} incremento={10} />
    <Contador />
     {/* <Botao /> */}
     {/* <MinMax min={3} max={20}></MinMax> */}
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