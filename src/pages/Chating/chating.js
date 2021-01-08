import React from 'react'
import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useState } from 'react/cjs/react.development'
import { ChatInput, ChatItem, Gap, Header } from '../../components/index-components'
import Fire from '../../config/firebase'
import { colors } from '../../utils/color'
import { fonts } from '../../utils/font'
import { getData } from '../../utils/index-utils'

const Chatting = ({ navigation, route }) => {
    const dataMentor = route.params;
    const [chatContent, setChatContent] = useState("");
    const [user, setUser] = useState({});

    useEffect (()=> {
        getData('user').then(res => {
            console.log('user login : ' , res);
            setUser(res)
        })

    }, []);

    const chatSend = () => {
        console.log('user : ', user);
        const today = new Date();
        const hour = today.getHours();
        const minutes = today.getMinutes()
        const date = today.getDate();

        const data = {
            sendBy: user.id,
            chatData : new Date().getTime(),
            chatTime : `${hour}:${minutes}:${hour > 12 ? 'PM' : 'AM'}`,
            chatContent: chatContent,
        }
        setChatContent('')
        console.log('data dikirim :', data)
        //data firebase
        Fire.database()
            .ref(`chatting/${user.uid}_${dataDoctor.data.uid}/allChat/${year}-${month}-${date}`,)
            .push(data);
    }

    return (
        <View style={styles.page}>
            <Header
                type='dark-profile'
                title={dataMentor.data.fullname}
                desc={dataMentor.data.category}
                photo={{ uri: dataMentor.data.photo }}
                onPress={() => navigation.goBack()}
            />
            <View style={{ flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.date}>Senin, 22 Desember 2020</Text>
                    <ChatItem isMe />
                    <ChatItem />
                    <ChatItem isMe />
                </ScrollView>
            </View>
            <ChatInput
                value={chatContent}
                onChangeText={value => setChatContent(value)}
                onButtonPress={chatSend}
            />
            <Gap height={18} />
        </View>
    )
}

export default Chatting

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1,
    },
    date: {
        fontSize: 12,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginVertical: 20,
        textAlign: 'center',
    }
})
