import React, {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Illogo } from '../../assets/index-assets';
import Fire from '../../config/firebase';
import { fonts } from '../../utils/font';

const SplashScreen = ({navigation}) => {
    useEffect(() => {
       setTimeout(() => {
         Fire.auth().onAuthStateChanged(user => {
           if(user) {
             //user sudah login
             console.log('user :', user);
             navigation.replace('MainApp'); 
           } else {
             //user sudah logout
            navigation.replace('GetStarted');
           }
         })
       }, 3000)
    }, [navigation]);
    return (
        <View style={styles.body}>
          <Illogo/>
          <Text style={styles.tulisan}>
            Tanya Tani
          </Text>
        </View>
      )
}

export default SplashScreen

const styles = StyleSheet.create({
body: {backgroundColor: '#E9FFEE', flex: 1 , alignItems:'center', justifyContent: 'center'},
  tulisan: { 
    fontSize: 30,
    marginTop: 20, 
    fontWeight: '600', 
    fontFamily: fonts.primary[700]},
})
