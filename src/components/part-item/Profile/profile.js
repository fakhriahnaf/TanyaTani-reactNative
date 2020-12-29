import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import {colors, fonts} from '../../../utils/index-utils';
import {IconRemovePhoto, UserDummy} from '../../../assets/index-assets'


const Profile = ({name, profession}) => {
    return (
        <View style={styles.container}>
            <View style={styles.borderPicture}>
                <Image source={UserDummy} style={styles.avatar}/>
                <IconRemovePhoto style={styles.removePhoto}/>
            </View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.profession}>{profession}</Text>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container : {
        justifyContent: 'center',
        alignItems: 'center',

    },
    avatar :{
        width: 110,
        height: 110,
        borderRadius: 110/2,
        
    },
    borderPicture:{
        width: 130,
        height: 130,
        borderRadius: 130/2,
        borderWidth: 1,
        borderColor: colors.border,
        justifyContent: 'center',
        alignItems: 'center'
    },
    name : {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 16,
    },
    profession: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.secondary,
        marginTop: 2,
    },
    removePhoto :{
        position: 'absolute',
        right: 8,
        bottom: 8,
    }
})
