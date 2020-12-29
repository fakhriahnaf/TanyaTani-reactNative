import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Gap, Header, Profile } from '../../components/index-components';
import {List} from '../../components/index-components'

const UserProfile = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title='Profile' type='dark' onPress={() => navigation.goBack()}/>
            <Gap height={40}/>
            <Profile name='Tiara' profession='Mahasiswa cantik'/>
            <Gap height={40}/>
            <List 
                name='Edit Profile' 
                desc='Last update 12/02/20' 
                icon='edit-profile' 
                type='next' 
                onPress={() =>navigation.navigate('UpdateProfile')}/>
            <List 
                name='Language' 
                desc='Last update 12/02/20' 
                icon='language' 
                type='next'
                 />
            <List 
                name='Rate' 
                desc='Last update 12/02/20' 
                icon='rate' 
                type='next' />
            <List 
                name='Help' 
                desc='Last update 12/02/20' 
                icon='help' 
                type='next' />
        </View>
    )
}

export default UserProfile;

const styles = StyleSheet.create({
    page :{
        flex: 1,
        backgroundColor: 'white',
    }
})
