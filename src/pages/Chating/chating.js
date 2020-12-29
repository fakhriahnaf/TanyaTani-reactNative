import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {ChatInput, ChatItem, Gap, Header} from '../../components/index-components'
import { colors } from '../../utils/color'
import { fonts } from '../../utils/font'

const Chatting = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header type='dark-profile' title="Alex Nurdiansyah" onPress={() => navigation.goBack()}/>
            <View style={{flex: 1}}>
                <Text style={styles.date}>Senin, 22 Desember 2020</Text>
                <ChatItem isMe/>
                <ChatItem/>
                <ChatItem isMe/>
            </View>
            <ChatInput/>
            <Gap height={18}/>
        </View>
    )
}

export default Chatting

const styles = StyleSheet.create({
    page : {
        backgroundColor: colors.white,
        flex: 1,
    },
    date: {
        fontSize: 12,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginVertical : 20,
        textAlign: 'center',
    }
})
