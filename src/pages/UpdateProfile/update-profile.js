import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Button, Gap, Header, Input, Profile } from '../../components/index-components'
import { colors } from '../../utils/color'

const UpdateProfile = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title='Update Profile' onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.content}>
                <Profile name='Tiara' profession='mahasiswa cantik' />
                <Gap height={20}/>
                <Input label='Full Name' />
                <Input label='Pekerjaan' />
                <Input label='Email' />
                <Input label='Password' />
                <Gap height={30}/>
                <Button title='Save Update' />
            </View>
            </ScrollView>
        </View>
    )
}

export default UpdateProfile

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1,
    },
    content :{
        padding: 30,
        paddingTop: 10,
    }
})
