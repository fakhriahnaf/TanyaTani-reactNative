import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Illogo } from '../../assets';

const SplashScreen = () => {
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
