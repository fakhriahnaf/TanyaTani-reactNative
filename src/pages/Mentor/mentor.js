import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HomeProfile, MentorCategory, NewsItem, RatedMentor } from '../../components/index-components';

const Mentor = () => {
    return (
        <View style={styles.page}>
            <HomeProfile/>
            <Text>wowow</Text>
            <Text>
                mentor categorry
            </Text>
            <MentorCategory/>
            <MentorCategory/>
            <MentorCategory/>
            <RatedMentor/>
            <RatedMentor/>
            <Text> News</Text>
            <NewsItem/>
            <NewsItem/>
        </View>
    );
};

export default Mentor;

const styles = StyleSheet.create({
    page: {
        paddingVertical: 40,
        paddingTop: 40,
        paddingHorizontal: 16,
    }
})
