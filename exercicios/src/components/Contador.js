import React, { useState } from 'react'
import { Text, Button } from 'react-native'
import Estilo from './Estilo'


export default ({ inicial = 0, incremento = 1 }) => {
    //let numero = props.inicial

    const [numero, setNumero] = useState(inicial)

    const inc = () => setNumero(numero + incremento)
    const dec = () => setNumero(numero - incremento)

    const teste = () => {
    }

    return (
        <>
            <Text style={Estilo.txtG} >{numero}</Text>
            <Button title="+" onPress={inc} />
            <Button title="-" onPress={dec} />

        </>
    )
}