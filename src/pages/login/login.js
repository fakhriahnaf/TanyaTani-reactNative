import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Illogo, SignInBorder } from '../../assets/index-assets';
import { Button, Gap, Input, Link } from '../../components/box';
import { colors } from '../../utils/color';

const LoginScreen = ({navigation}) => {
    return (
        <View style={styles.scren}>
            <View>
                <SignInBorder/>
            </View>

            
            <View style={styles.page}>
                {/* <Text style={styles.title}>Masuk dan mulailah berkonsultasi</Text> */}
                <View height={90}/>
                <Input label='Email Address'/>
                <Gap height={20}/>
                <Input label='Password'/>
                <Gap height={15}/>
                <Link size={16} title="Forgot Password ? "/>
                <Gap height={100}/>
                <Button title="Sign In" onPress={() => navigation.replace('MainApp')} />
                <Gap height={30}/>
                <Link size={20} title="dont have account? SignUp!" align='center' onPress={() => navigation.navigate('RegisterScreen')}/>
                
                <Gap height={170}/>
            </View>
        </View>
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
