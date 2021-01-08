import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { Gap, HomeProfile, MentorCategory, NewsItem, RatedMentor } from '../../components/index-components';
import { colors } from '../../utils/color';
import { fonts } from '../../utils/font';
import { DummyTopRated1, DummyTopRated2, DummyTopRated3, JSONMentorCategory } from '../../assets/index-assets';
import Fire from '../../config/firebase';
import { showError } from '../../utils/index-utils';

const Mentor = ({ navigation }) => {
    const [news, setNews] = useState([]);
    const [categoryMentor, setCategoryMentor] = useState([]);
    const [mentors, setMentors] = useState([]);


    useEffect(() => {

        getCategoryMentor();
        getTopRatedMentor();
        getNews();
    }, []);


    const getCategoryMentor = () => {
        //Firebase Category Mentor
        Fire.database()
            .ref('category_mentor/')
            .once('value')
            .then(res => {
                console.log('category mentor :', res.val());
                if (res.val()) {
                    const data = res.val();
                    const filterData = data.filter(el => el => el != null);

                    setCategoryMentor(filterData);
                }
            })
            .catch(err => {
                showError(err.message);
            });


    }

    const getTopRatedMentor = () => {
        Fire.database()
            .ref('mentors/')
            .orderByChild('rate')
            .limitToLast(3)
            .once('value')
            .then(res => {
                console.log('top rated mentor :', res.val());
                if (res.val()) {
                    const oldData = res.val();
                    const data = [];
                    Object.keys(oldData).map(key => {
                        data.push({
                            id: key,
                            data: oldData[key],
                        });
                    });
                    console.log('data  hasil parsel : ', data)
                    setMentors(data);
                }
            })
            .catch(err => {
                showError(err.message);
            });
    }

    const getNews = () => {
        //firebase database news-> static
        Fire.database()
            .ref('news/')
            .once('value')
            .then(res => {
                console.log('data :', res.val());
                if (res.val()) {
                    setNews(res.val());
                }
            })
            .catch(err => {
                showError(err.message);
            })
    }

    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
                    <Text style={styles.wellcome}>Mau konsultasi apa hari ini?</Text>
                    <View style={styles.wrappedScroll}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.category}>
                                <Gap width={20} />
                                {categoryMentor.map(item => {
                                    return (<MentorCategory
                                        key={`category-${item.id}`}
                                        category={item.category}
                                        onPress={() => navigation.navigate('ChooseMentor', item)} />)
                                })}
                            </View>
                        </ScrollView>
                    </View>
                    <Text style={styles.sectionLabel}>Top Rated Mentor</Text>
                    {mentors.map(mentor => {
                        return (
                            <RatedMentor
                                key={mentor.id}
                                name={mentor.data.fullname}
                                avatar={{uri: mentor.data.photo}}
                                desc={mentor.data.profession}
                                onPress={() => navigation.navigate('MentorProfile', mentor)}
                            />
                        )
                    })}

                    <Text style={styles.sectionLabel}> News</Text>
                    {
                        news.map(item => {
                            return (
                                <NewsItem
                                    key={item.id}
                                    title={item.title}
                                    date={item.date}
                                    image={item.image}
                                />
                            );
                        })
                    }

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
