import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { getFontScale } from 'react-native/Libraries/Utilities/PixelRatio'
import { UserPhotoNull, IconAddPhoto } from '../../assets/index-assets'
import { Button, Gap, Header, Link } from '../../components/index-components'
import { colors } from '../../utils/color'
import { fonts } from '../../utils/font'


const UploadPhoto = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <Header title='Upload Photo' onPress={() => navigation.goBack()} />
            <View style={styles.content}>
                <View style={styles.profile}>
                    <View style={styles.avatarWrapper}>
                        <Image source={UserPhotoNull} style={styles.avatar} />
                        <IconAddPhoto style={styles.addPhoto} />
                    </View>
                    <Gap height={30}/>
                    <Text style={styles.name}>wowoowowo</Text>
                    <Text style={styles.profession}>Project Team</Text>
                </View>
                <View>
                    <Button title='upload and contiunue' />
                    <Gap height={30} />
                    <Link title='Skip for this' align='center' size={18}/>
                </View>
            </View>
        </View>
    )
}

export default UploadPhoto;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white,
    },
    avatar: {
        width: 110,
        height: 110,
    },
    content: {
        paddingHorizontal: 40,
        paddingBottom: 60,
        flex: 1,
        justifyContent: 'space-between',


    },
    avatarWrapper: {
        width: 130,
        height: 130,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 130 / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profile: {
        alignItems: 'center',
        //backgroundColor: 'green',
        flex:1,
        justifyContent: 'center',
    },  
    addPhoto: {
        position: 'absolute', //supaya bisa ditumpuk, tapi ditengah
        bottom: 8,
        right: 3,
    },
    name: {
        fontSize: 24,
        color: colors.text.primary,
        fontFamily: fonts.primary[600],
        textAlign: 'center',
    },
    profession: {
        fontSize: 18,
        fontFamily: fonts.primary.normal,
        textAlign: 'center',
        color: colors.text.secondary,
        marginTop: 4,
    },




})
