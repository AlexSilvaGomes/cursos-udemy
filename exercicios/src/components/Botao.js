import React from 'react'
import { Button } from 'react-native'

export default () => {

    function executar() {
        console.warn('Exec!!')
    }

    return (
        <>
            <Button title="Executar #1"
                onPress={()=> console.warn('arrow function')} />

        </>

    )
}
