import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { DummyTopRated1 } from '../../../assets/dummy/index-dummy'
import { IconNext } from '../../../assets/icons'
import { colors } from '../../../utils/color'
import { fonts } from '../../../utils/font'

const List = ({pict, name, desc, type, onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={pict} style={styles.avatar}/>
            <View style={styles.content}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.text}>{desc}</Text>
            </View>
            {type === 'next' && <IconNext/>}
        </TouchableOpacity>
    )
}

export default List;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    content :{
        flex: 1,
    },  

    avatar : {
        width: 46,
        height: 46,
        borderRadius: 46/2,
        marginRight: 16,
    },
    name: {
        fontSize: 16,
        fontFamily: fonts.primary[400],
        color: colors.text.primary,
    },
    text :{
        fontSize: 12,
        fontFamily: fonts.primary[300],
        color: colors.text.secondary,

    }
})
