import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, Profile } from '../../components/index-components';

const UserProfile = () => {
    return (
        <View>
            <Header title='Profile' type='dark'/>
            <Profile/>
            <Text></Text>
        </View>
    )
}

export default UserProfile;

const styles = StyleSheet.create({})
