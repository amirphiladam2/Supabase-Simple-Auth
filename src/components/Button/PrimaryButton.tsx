import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type PrimaryButtonProps={
  title:string;onPress:()=>void;loading?:boolean;
}
const PrimaryButton = ({title,onPress}:PrimaryButtonProps) => {
  return (
    <TouchableOpacity style={styles.Button}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
    Button:{
        width:"100%",
        paddingVertical:12,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        backgroundColor:"#0575f5"
    },
    buttonText:{
        fontWeight:'500',
        color:'white'
    }
})