import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { colors } from '../../../utils/color'
import { fonts } from '../../../utils/font'

const Input = ({label}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textLabel}> {label}</Text>
            <TextInput style={styles.input}></TextInput>
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    input :{
        borderWidth: 1,
        borderColor : '#E9E9E9',
        borderRadius: 10,
        height: 48,
        padding: 13,
        fontFamily: fonts.primary.normal,
        fontSize: 14,
    }, 
    textLabel : {
        fontSize: 18,
        paddingBottom: 10,
        color : colors.text.primary,
        fontFamily: fonts.primary[400],
    },
    container :{
        paddingTop: 10,
        paddingBottom: 10,
    }
})
