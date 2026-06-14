import { Button, StyleSheet, Text, View,Alert } from 'react-native'
import React, { useState } from 'react'
import InputField from '@/components/Forms/InputField'
import PrimaryButton from '@/components/Button/PrimaryButton'
import{useAuth} from "@/context/AuthProvider"
import { useRouter } from 'expo-router'

const LoginScreen = () => {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const{signIn}=useAuth();
  const router=useRouter()
  
  const handleLogin = async () => {
  if (!email || !password) {
    Alert.alert('Please fill all fields');
    return;
  }
  try{
     await signIn(email,password);
     router.replace("/home")
  } catch(error:any){
    alert(error.message)
  }
};
  return (
    <View style={styles.container}>
      <InputField
       placeholder='Enter your email'
       value={email}
       onChangeText={setEmail}
      />
      <InputField
       placeholder='Enter your password'
       value={password}
       onChangeText={setPassword}
       secureTextEntry
      />
      <PrimaryButton
        title="Login"
        onPress={handleLogin}
      />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container:{
    gap:12
  }
})