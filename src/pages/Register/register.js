import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Header, HeaderLogin, Input } from '../../components/index-components'

const RegisterScreen = ({navigation}) => {
    return (
        <View style={styles.screen}>
            <Header onPress={() => navigation.goBack()} title='Daftar akun'/>
            <Gap height={40}/>
            <View style={styles.content}>
                <Input label='Full Name' />
                <Gap height={30}/>
                <Input label='Pekerjaan' />
                <Gap height={30}/>
                <Input label='Password' />
                <Gap height={30}/>
                <Input label='Email' />
                <Gap height={100}/> 
                <Button title='Continue'  onPress={() =>navigation.navigate('UploadPhoto')}/>
            </View>
        </View>
    )
}

export default RegisterScreen;

const styles = StyleSheet.create({
    screen: {
        backgroundColor: 'white',
        flex: 1
        
    },
    content :{
        padding: 40,
        paddingTop: 0,
    }
})
