import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Header, Profile, ProfileItem } from '../../components/index-components'
import { colors } from '../../utils/color'

const MentorProfile = () => {
    return (
        <View style={styles.page}>
            <Header title='Mentor Profile' />
            <View style={styles.content}>
                <Profile name='Alex Nurdiansyah' profession='Mentor Petani Ladang' />
                <Gap height={20}/>
                <ProfileItem label='Tani Center' value='Farm House Lembang' />
                <ProfileItem label='Cak Jaya' value='Farm House Lembang' />
            </View>
            <Gap height={30}/>
            <View style={styles.action}>
                <Button title='Start Conversation' />
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
