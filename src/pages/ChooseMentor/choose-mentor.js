import React from 'react'
import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useState } from 'react/cjs/react.development'
import { DummyTopRated1 } from '../../assets/index-assets'
import {Header, List} from '../../components/index-components'
import Fire from '../../config/firebase'
import { colors } from '../../utils/color'

const ChooseMentor = ({navigation, route}) => {
    const [listMentor, setListMentor] = useState([]);
    const itemCategory = route.params;

    useEffect(()=> {
        mentorByCategory(itemCategory.category);
    }, [itemCategory.category]);

    const mentorByCategory = category => {
        Fire.database()
            .ref('mentors/')
            .orderByChild('category')
            .equalTo(category)
            .once('value')
            .then(res => {
                console.log('data list mentor : ', res.val());
                if (res.val()) {
                    const oldData = res.val();
                    const data = [];
                    Object.keys(oldData).map(item => {
                       data.push({
                            id:item,
                            data: oldData[item],
                       });
                    });
                    console.log('parse list :', data)
                    setListMentor(data)
                }
            });
    }
    return (
        <View style={styles.page}>
            <Header 
                title={`${itemCategory.category}`} 
                type='dark' 
                onPress={()=> navigation.goBack()}
            />
            {listMentor.map(mentor => {
                return (
                    <List 
                        key={mentor.id}
                        pict={{uri: mentor.data.photo}} 
                        name={mentor.data.fullname} 
                        desc={mentor.data.verifikasi}
                        type='next'
                        onPress={() => navigation.navigate('MentorProfile', mentor)}
                    />
                )
            })}
        </View>
    )
}

export default ChooseMentor

const styles = StyleSheet.create({
    page: {
        backgroundColor : colors.white,
        flex: 1,
    }
})
