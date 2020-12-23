import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {IconBackDark} from '../../../assets/index-assets'
import { Button, Gap } from '../../box'

const Header = ({onPress, title}) => {
    return (
        <View style={styles.container}>
            <View style={{paddingTop: 25}}>
                {/* <IconBackDark/> */}
                <Button type='icon-only' icon='back-dark' onPress={onPress}/>
            </View>
            <Text style={styles.text}>{title}</Text>
            <Gap width={29}/>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container :{
        paddingHorizontal : 20,
        paddingTop: 30,
        paddingVertical : 25,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center'
    },
    text :{
        textAlign: 'center',
        paddingTop : 22,
        flex: 1,
        fontSize: 20,
        fontFamily: 'Nunito-SemiBold',
        color: 'black'
    }
})
