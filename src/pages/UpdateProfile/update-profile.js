import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { showMessage } from 'react-native-flash-message'
import { ScrollView } from 'react-native-gesture-handler'
import { Button, Gap, Header, Input, Profile } from '../../components/index-components'
import Fire from '../../config/firebase'
import { colors } from '../../utils/color'
import { getData, storeData } from '../../utils/index-utils';
import {
    launchImageLibrary
} from 'react-native-image-picker';
import { UserPhotoNull } from '../../assets/illustration';

const UpdateProfile = ({ navigation }) => {
    const [profile, setProfile] = useState({
        fullname: '',
        profession: '',
        email: '',
    });
    const [password, setPasword] = useState('');
    const [photoForDB, setPhotoForDB] = useState('');
    const [photo, setPhoto] = useState(UserPhotoNull);

    useEffect(() => {
        getData('user').then(res => {
            const data = res;
            setPhoto({ uri: res.photo });
            setProfile(data);
        })
    }, []);

    const update = () => {
        console.log('profile :', profile);
        console.log('new password: ', password);

        if (password.length > 0) {
            if (password.length < 6) {
                showMessage({
                    message: 'password kurang dari 6',
                    type: 'default',
                    backgroundColor: colors.error,
                    color: 'white',
                })
            } else {
                updatePassword();
                updateProfileData();
                navigation.replace('MainApp');
            }
        } else {
            updateProfileData();
            navigation.replace('MainApp');
        }
    }

    const updatePassword = () => {
        //update password
        Fire.auth().onAuthStateChanged(user => {
            if (user) {
                user.updatePassword(password).catch(err => {
                    showMessage({
                        message: err.message,
                        type: 'default',
                        backgroundColor: colors.error,
                        color: 'white',
                    });
                });
            }
        });
    }

    const updateProfileData = () => { 
        //firebase update profile
        const data = profile;
        data.photo = photoForDB;

        //update photo profile firebase
        Fire.database()
        .ref(`users/${profile.uid}/`)
        .update(data)
        .then(() => {
            console.log('success: ', data)
            storeData('user', data);
        })
        .catch(err => {
            showMessage({
                message: err.message,
                type: 'default',
                backgroundColor: colors.error,
                color: colors.white,
            })
        })
    }

    const changeText = (key, value) => {
        setProfile({
            ...profile,
            [key]: value,
        })
    }

    const getImage = () => {
        let options = {
            maxWidth: 200,
            maxHeight: 200,
            quality: 1,
            includeBase64: true,
        };
        launchImageLibrary(options, response => {
            console.log('response :', response);
            if (response.didCancel || response.error) {
                showMessage({
                    message: 'pilih foto dulu',
                    type: 'default',
                    backgroundColor: colors.error,
                    color: colors.white,
                });
            } else {
                console.log('response getImage: ', response);
                const source = { uri: response.uri };

                setPhotoForDB(`data:${response.type};base64, ${response.base64}`);
                setPhoto(source);
            }
        });
    }

    return (
        <View style={styles.page}>
            <Header title='Update Profile' onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Profile isRemove photo={photo} onPress={getImage} />
                    <Gap height={20} />
                    <Input
                        label='Full Name'
                        value={profile.fullname}
                        onChangeText={value => changeText('fullname', value)} />
                    <Input
                        label='Pekerjaan'
                        value={profile.profession}
                        onChangeText={value => changeText('profession', value)} />
                    <Input
                        label='Email'
                        value={profile.email}
                        disable />
                    <Input
                        label='Password'
                        value={password}
                        secureTextEntry
                        onChangeText={value => setPasword(value)} />
                    <Gap height={30} />
                    <Button title='Save Update' onPress={update} />
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
    content: {
        padding: 30,
        paddingTop: 10,
    }
})
