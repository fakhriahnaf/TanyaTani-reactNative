import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { colors } from '../../../utils/color'
import { fonts } from '../../../utils/font'
import { Button } from '../../box'

const ChatInput = ({value, onChangeText, onButtonPress}) => {
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input} 
                placeholder='tulis pesan untuk alex'
                value={value}
                onChangeText={onChangeText}
            />
                
            <Button 
                disable= {value.length < 1}
                title='send' 
                type='button-icon-send' 
                onPress={onButtonPress}/>
        </View>
    )
}

export default ChatInput

const styles = StyleSheet.create({
    container : {
        padding: 16,
        flexDirection: 'row',
        backgroundColor: 'yellow'
    },
    input : {
        backgroundColor: colors.disable,
        padding: 14,
        borderRadius: 12,
        flex: 1,
        marginRight: 10,
        fontSize: 14,
        fontFamily: fonts.primary[300],
        maxHeight: 45,
    }
})

