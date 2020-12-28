import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DummyTopRated1 } from '../../assets/index-assets'
import {Header, ListMentor} from '../../components/index-components'
import { colors } from '../../utils/color'

const ChooseMentor = () => {
    return (
        <View style={styles.page}>
            <Header title='Mentor Petani Ladang' type='dark'/>
            <ListMentor pict={DummyTopRated1} name='Alexandra Christine' desc='Punclut' type='next'/>
            <ListMentor pict={DummyTopRated1} name='Alexandra Christine' desc='Punclut' type='next'/>
            <ListMentor pict={DummyTopRated1} name='Alexandra Christine' desc='Punclut' type='next'/>
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
