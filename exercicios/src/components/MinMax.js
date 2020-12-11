import React from 'react'
import { Text } from 'react-native'
import Estilo from './Estilo'

export default (props) => {
   console.warn(props)
    return (
        <Text style={Estilo.txtG}>O valor de {props.max } é maior que o de {props.min}</Text> 
    )
}