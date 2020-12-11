import React from 'react'
import { Text } from 'react-native'
import Estilo from './Estilo'



export default () => {
    console.warn('hello yellow box')
    return <Text style={Estilo.txtG}>Primeiro!</Text>
}