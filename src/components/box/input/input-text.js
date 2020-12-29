import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { colors } from '../../../utils/color'
import { fonts } from '../../../utils/font'

const Input = ({label, value, onChangeText, secureTextEntry}) => {
    //efek glow and blur
    const [border, setBorder] = useState(colors.border);
    const onFocusForm = () => {
        setBorder(colors.tertiary);
    };
    //supaya gak blur 
    const onBlurForm = () => {
        setBorder(colors.border);
    };
    return (
        <View style={styles.container}>
            <Text style={styles.textLabel}> {label}</Text>
            <TextInput 
                onFocus={onFocusForm} 
                onBlur={onBlurForm} 
                style={styles.input(border)} 
                value={value} 
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}>
                
            </TextInput>
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    input : border => ({
        borderWidth: 1,
        borderColor : border,
        borderRadius: 10,
        height: 48,
        padding: 13,
        fontFamily: fonts.primary.normal,
        fontSize: 14,
    }), 
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
