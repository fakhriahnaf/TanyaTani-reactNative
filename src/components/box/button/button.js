import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import ButtonIconSend from './button-icon-send'
import IconOnly from './icon-only'
//import { TouchableOpacity } from 'react-native-gesture-handler'

const Button = ({type, title, onPress,icon, disable}) => {
    if (type === 'button-icon-send') {
        return <ButtonIconSend disable={disable}/>
    }
    if (type === 'icon-only') {
        return <IconOnly icon={icon} onPress={onPress}/>
    }
    
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
