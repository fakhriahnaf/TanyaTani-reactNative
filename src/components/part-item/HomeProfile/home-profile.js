import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { color } from 'react-native-reanimated';
import { UserDummy } from '../../../assets/index-assets';
import { colors } from '../../../utils/color';
import { fonts } from '../../../utils/font';

const HomeProfile = ({onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={UserDummy} style={styles.avatar}/>
            <View>
                <Text style={styles.name}>Tiara Adellyn</Text>
                <Text style={styles.profession}>Petani Muda</Text>
            </View>
        </TouchableOpacity>
    )
}

export default HomeProfile;

const styles = StyleSheet.create({
    container : {
        flexDirection:'row',
        paddingTop: 20,
        //backgroundColor: 'yellow'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 46/2,
        margin: 12,
        justifyContent: 'center',
    },
    name: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        paddingTop: 10,
        paddingLeft: 15,
    },
    profession :{
        fontSize: 14,
        fontFamily: fonts.primary[400],
        color: colors.text.secondary,
        paddingLeft: 15,
    }
    

})
