import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { Gap, HomeProfile, MentorCategory, NewsItem, RatedMentor } from '../../components/index-components';
import { colors } from '../../utils/color';
import { fonts } from '../../utils/font';
import {DummyTopRated1, JSONMentorCategory} from '../../assets/index-assets';

const Mentor = ({navigation}) => {
    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <HomeProfile onPress={() => navigation.navigate('UserProfile')}/>
                    <Text style={styles.wellcome}>Mau konsultasi apa hari ini?</Text>
                    <View style={styles.wrappedScroll}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.category}>
                                <Gap width={20} />
                                {JSONMentorCategory.data.map(item => {
                                    return <MentorCategory 
                                        key={item.id} 
                                        category={item.category} 
                                        onPress={() => navigation.navigate('ChooseMentor')}/>
                                })}
                            </View>
                        </ScrollView>
                    </View>
                    <Text style={styles.sectionLabel}>Top Rated Mentor</Text>
                    <RatedMentor 
                        name='Alex Nurdiansyah' 
                        avatar={DummyTopRated1}
                        desc='Mentor Petani Ladang'
                        onPress={() => navigation.navigate('MentorProfile')}/>
                    <RatedMentor 
                        name='Alex Nurdiansyah' 
                        avatar={DummyTopRated1}
                        desc='Mentor Petani Ladang'
                        onPress={() => navigation.navigate('MentorProfile')}/>

                    <Text style={styles.sectionLabel}> News</Text>
                    <NewsItem />
                    <NewsItem />
                    
                </ScrollView>
            </View>
        </View>
    );
};

export default Mentor;

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.secondary,
        flex: 1,
    },
    content: {
        backgroundColor: colors.white,
        flex: 1,
        paddingVertical: 5,
        paddingHorizontal: 16,
        paddingTop: 40,
        borderBottomRightRadius: 22,
        borderBottomLeftRadius: 22,
    },
    wellcome: {
        fontSize: 26,
        fontFamily: fonts.primary[700],
        color: colors.text.primary,
        marginTop: 20,
        marginBottom: 16,
        maxWidth: 230,
        paddingLeft: 10,
        //backgroundColor: 'yellow'
    },
    category: {
        flexDirection: 'row'
    },
    wrappedScroll: {
        marginHorizontal: -16,
    },
    sectionLabel: {
        fontSize: 22,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 30,
        marginBottom: 16,
        paddingLeft: 10,

    }

})
