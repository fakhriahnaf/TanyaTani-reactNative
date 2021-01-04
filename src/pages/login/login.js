import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Illogo, SignInBorder } from '../../assets/index-assets';
import { Button, Gap, Input, Link } from '../../components/box';
import { colors } from '../../utils/color';
import {storeData, useForm} from '../../utils/index-utils';
import Fire from '../../config/firebase'
import { showMessage } from 'react-native-flash-message';
import { useState } from 'react';
import {Loading} from '../../components/index-components';

const LoginScreen = ({navigation}) => {
    //declare the variable
    const [form, setForm] = useForm({email: '', password: ''});
    const [loading, setLoading] = useState(false);

    //login Continue
    const loginContinue = () =>{
        console.log('form :' , form);
        setLoading(true)
        
        //firebase database
        Fire.auth()
            .signInWithEmailAndPassword(form.email, form.password)
            .then(res => { 
                console.log('success: ' , res);
                setLoading(false);
                Fire.database()
                    .ref(`users/${res.user.uid}/`)
                    .once('value')
                    .then(resDB =>{
                        console.log('data user:' , resDB.val());
                        if(resDB.val()) {
                            storeData('user', resDB.val());
                            navigation.navigate('MainApp');
                        }
                    })
        })
        .catch(err => {
            console.log('error: ', err);
            setLoading(false);
            showMessage({
                message: err.message,
                type:'default',
                backgroundColor: colors.error,
                color: colors.white,
            })
        })
        
    }
    return (
        <>
        <View style={styles.scren}>
            <View>
                <SignInBorder/>
            </View>
            <View style={styles.page}>
                {/* <Text style={styles.title}>Masuk dan mulailah berkonsultasi</Text> */}
                <View height={90}/>
                <Input 
                    label='Email Address' 
                    value={form.email} 
                    onChangeText={(value) => setForm('email', value)}/>
                <Gap height={20}/>
                <Input 
                    label='Password'
                    value={form.password}
                    onChangeText={(value) => setForm('password', value)}
                    secureTextEntry/>
                <Gap height={15}/>
                <Link size={16} title="Forgot Password ? "/>
                <Gap height={100}/>
                <Button title="Sign In" onPress={loginContinue} />
                <Gap height={30}/>
                <Link size={20} title="dont have account? SignUp!" align='center' onPress={() => navigation.navigate('RegisterScreen')}/>
                
                <Gap height={170}/>
            </View>
        </View>
        {loading && <Loading/>}
        </>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    scren: {
        backgroundColor: 'yellow',
        //maxWidth : 400,

    },
    page: {
        padding: 40,
        backgroundColor: 'white',
        //flex: 2,
    },
    title: {
        fontFamily: 'Nunito-SemiBold',
        fontSize: 25,
        color: colors.text.primary,
        marginTop: 40,
        marginBottom: 40,
        maxWidth: 253, // lebar kolom tulisan vield
    }
})
