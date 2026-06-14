import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';


type InputFieldProps={
    icon?:keyof typeof Ionicons.glyphMap;
    placeholder:string;
    value:string;
    onChangeText:(text:string)=>void;
    secureTextEntry?:boolean;
}
const InputField = ({icon,value,onChangeText,placeholder,secureTextEntry=false}:InputFieldProps) => {
    const[hidePassword,setHidePassword]=useState(true)
  return (
    <View style={styles.field}>
      {icon&&(
        <Ionicons icon={name} size={22} color="#ccc" style={{marginRight:6}}/>
      )}
      <TextInput
        style={styles.formText}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry&& hidePassword}
      />
      {secureTextEntry&&(
        <TouchableOpacity onPress={()=>setHidePassword(!hidePassword)}>
            <Ionicons name={hidePassword?"eye-outline":"eye-off"} size={22} color="#ccc"/>
        </TouchableOpacity>
      )}
    </View>
  )
}

export default InputField

const styles = StyleSheet.create({
    field:{
        flexDirection:'row',
        width:"100%",
        paddingHorizontal:16,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderRadius:20,
        borderColor:"#ccc",
    },
    formText:{
      flex:1,
    },
  
})