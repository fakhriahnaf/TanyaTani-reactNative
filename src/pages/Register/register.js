import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Button, Gap, Header, HeaderLogin, Input } from '../../components/index-components'
import { useForm } from '../../utils/useForm'

const RegisterScreen = ({ navigation }) => {
    const [form, setForm] = useForm({
        fullname: ' ',
        profession: ' ',
        email: ' ',
        password: ' ',
    })


    const onContinue = () => {
        console.log(form)
    }
    return (
        <View style={styles.screen}>
            <Header onPress={() => navigation.goBack()} title='Daftar akun' />
            <Gap height={40} />
            <View style={styles.content}>
                <ScrollView>
                    <Input 
                        label='Full Name' 
                        value={form.fullname} 
                        onChangeText={(value) => setForm('fullname' , value)} 
                    />
                    <Gap height={30} />
                    <Input 
                        label='Pekerjaan' 
                        value={form.profession} 
                        onChangeText={(value) => setForm('profession' , value)} 
                    />
                    <Gap height={30} />
                    <Input 
                        label='Password' 
                        value={form.password} 
                        onChangeText={(value) => setForm('password' , value)}
                        secureTextEntry/>
                    <Gap height={30} />
                    <Input 
                        label='Email' 
                        value={form.email} 
                        onChangeText={(value) => setForm('email' , value)}
                    />
                    <Gap height={100} />
                    <Button title='Continue' onPress={() => navigation.navigate('UploadPhoto')} onPress={onContinue} />
                </ScrollView>
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
    content: {
        padding: 40,
        paddingTop: 0,
    }
})
