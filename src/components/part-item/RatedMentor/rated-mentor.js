import React from 'react'
import { StyleSheet, Text, View , Image} from 'react-native'
import { DummyTopRated1, IconStar } from '../../../assets/index-assets';
import { colors } from '../../../utils/color';
import { fonts } from '../../../utils/font';

const RatedMentor = () => {
    return (
        <View style={styles.container}>
            <Image source={DummyTopRated1} style={styles.avatar}/>
            <View style={styles.profile}>
                <Text style={styles.name}>Alex rachmanto</Text>
                <Text style={styles.category}>Mentor Petani Kebun</Text>
            </View>
            <View style={styles.rate}>
                <IconStar/>
                <IconStar/>
                <IconStar/>
                <IconStar/>
                <IconStar/>
            </View>
        </View>
    )
}

export default RatedMentor;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 16,
        //backgroundColor: 'yellow'
    },
    profile :{
        flex: 1,
        //backgroundColor: 'yellow'
    },  
    avatar : {
        width: 50,
        height: 50,
        borderRadius: 50/2,
        marginRight: 15,
        marginLeft: 10,
    },
    rate :{
        paddingTop: 15,
        flexDirection:'row',
    },
    name : {
        fontSize: 17,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 3,
    },
    category :{
        fontSize : 12,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginTop: 2,
    }
})
