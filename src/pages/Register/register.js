import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Button, Gap, Header, HeaderLogin, Input, Loading } from '../../components/index-components'
import Fire from '../../config/firebase'
import { colors } from '../../utils/color'
import { useForm } from '../../utils/useForm'
import { showMessage, hideMessage } from "react-native-flash-message";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { storeData } from '../../utils/index-utils'

const RegisterScreen = ({ navigation }) => {
    const [form, setForm] = useForm({
        fullname: '',
        profession: '',
        email: '',
        password: '',
    });

    const [loading, setLoading] = useState(false)
    const onContinue = () => {
        console.log(form)
        //navigation.navigate('UploadPhoto', data)
        setLoading(true)
        Fire.auth()
            .createUserWithEmailAndPassword(form.email, form.password)
            .then((success) => {
                setLoading(false)
                setForm('reset')
                
                const data ={
                    fullname: form.fullname,
                    profession: form.profession,
                    email: form.email,
                    uid: success.user.uid,
                }
                //https: // firebase.com/users
                Fire.database()
                    .ref('users/' +success.user.uid+ '/')
                    .set(data);

                storeData('user', data);
                navigation.navigate('UploadPhoto', data)
                console.log('register success' ,success); 
            })
            .catch((error) => {
                const errorMessage = error.message;
                setLoading(false);
                showMessage({
                    message: errorMessage,
                    type: 'default',
                    backgroundColor: colors.error,
                    color: colors.white,
                })
                console.log('error:',  error);
            });
    }
    return (
        <>
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
        { loading && <Loading/>}
        </>
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
