import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Button = ({type, title, onPress}) => {
    return (
        <TouchableOpacity style={styles.container(type)} onPress={onPress}>
            <Text style={styles.textButton(type)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container : (type)=> ({
        backgroundColor: type === 'secondary' ? 'white' :'#529D63',
        paddingVertical: 10,
        borderRadius : 10,
        height: 45,
    }),
    textButton : (type) => ({
        fontSize: 18,
        fontWeight:'600',
        textAlign: 'center',
        fontFamily: 'CeraPro-Medium',
        color: type === 'secondary' ? 'black' : 'white',
    }),
})
