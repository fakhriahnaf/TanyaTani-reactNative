import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DummyTopRated1 } from '../../assets/index-assets'
import {Header, List} from '../../components/index-components'
import { colors } from '../../utils/color'

const ChooseMentor = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title='Mentor Petani Ladang' type='dark' onPress={()=> navigation.goBack()}/>
            <List 
                pict={DummyTopRated1} 
                name='Alexandra Christine' 
                desc='Punclut' 
                type='next'
                onPress={() => navigation.navigate('Chatting')}/>
            <List
                pict={DummyTopRated1} 
                name='Alexandra Christine' 
                desc='Punclut' 
                type='next'
                onPress={() => navigation.navigate('Chatting')}/>
            <List
                pict={DummyTopRated1} 
                name='Alexandra Christine' 
                desc='Punclut' 
                type='next'/>
        </View>
    )
}

export default ChooseMentor

const styles = StyleSheet.create({
    page: {
        backgroundColor : colors.white,
        flex: 1,
    }
})