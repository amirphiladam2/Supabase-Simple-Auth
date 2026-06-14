import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const home = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.headerArea}>
         <Text style={styles.Text}>Welcome to HomeScreen</Text>
         <Text style={styles.Text}>Subscribe to AmirDevStudio</Text>
      </View>
      <View style={styles.contentArea}>
         <Text style={styles.Text}>Like,comment if the video is helpful</Text>
      </View>
      
    </SafeAreaView>
  )
}

export default home

const styles = StyleSheet.create({
  headerArea:{
    flex:0.4,
    backgroundColor:'green',
    alignItems:'center',
    justifyContent:'center'
  },
  contentArea:{
    flex:0.6,
    backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center'
  },
  Text:{
    fontSize:18,
    fontWeight:'600',
    color:'white'
  }
})