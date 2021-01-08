import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Header, Profile, ProfileItem } from '../../components/index-components'
import { colors } from '../../utils/color'

const MentorProfile = ({navigation, route }) => {
    const dataMentor = route.params;
    return (
        <View style={styles.page}>
            <Header title='Mentor Profile' onPress={() => navigation.goBack()} />
            <View style={styles.content}>
                <Profile 
                    name={dataMentor.data.fullname} 
                    profession={dataMentor.data.profession}
                    photo={{uri: dataMentor.data.photo}} />
                <Gap height={20}/>
                <ProfileItem 
                    label='Tani Center' 
                    value={dataMentor.data.taniCenter} />
                <ProfileItem 
                    label='Tani Center address' 
                    value={dataMentor.data.taniCenter_address} />
                <ProfileItem 
                    label='Nomor Handphone' 
                    value={dataMentor.data.phone_number} />
            </View>
            <Gap height={30}/>
            <View style={styles.action}>
                <Button title='Start Conversation' onPress={() => navigation.navigate('Chatting', dataMentor)} />
            </View>

        </View>
    )
}

export default MentorProfile;

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1,
        
    },
    action: {
        paddingHorizontal: 40,
        paddingTop: 23,
        //flex: 1,

    },
    content :{
        padding: 10,
    }
})
