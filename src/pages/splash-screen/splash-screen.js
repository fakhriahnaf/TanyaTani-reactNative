import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Illogo } from '../../assets/index-assets';

const SplashScreen = ({navigation}) => {
    useEffect(() => {
       setTimeout(() => {
        navigation.navigate('GetStarted')
       }, 3000)
    }, [navigation])
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
  tulisan: { fontSize: 30,marginTop: 20, fontWeight: '600'},
})
