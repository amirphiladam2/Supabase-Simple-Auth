import { StyleSheet, View, Alert } from 'react-native'
import React, { useState } from 'react'
import InputField from '@/components/Forms/InputField'
import PrimaryButton from '@/components/Button/PrimaryButton'
import { useAuth } from '@/context/AuthProvider'
import { useRouter } from 'expo-router'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const router=useRouter();
  const { signIn } = useAuth();
  
    const handlSignIn = async () => {
      if (!email || !password) {
        Alert.alert("Please enter the complete register details")
      }
      try {
        await signIn(email, password)
        router.replace("/(tabs)/home")
      } catch (error: any) {
        alert(error.message)
      }
    }
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
        onPress={handlSignIn}
      />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    gap: 12
  }
})