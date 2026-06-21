import { StyleSheet, Alert, View } from 'react-native'
import React, { useState } from 'react'
import InputField from '@/components/Forms/InputField'
import PrimaryButton from '@/components/Button/PrimaryButton'
import { useAuth } from '@/context/AuthProvider'

const RegisterScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const { signUp } = useAuth();

  const handleRegister = async () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert("Please enter the complete register details")
      return;
    }
    if(password!==confirmPassword){
      Alert.alert("Passwords do not match")
      return;
    }
    try {
      await signUp(email, password)
      alert("Success,Account created")
    } catch (error: any) {
      Alert.alert("Registration Failed",error.message)
    }
  }

  return (
    <View style={styles.container}>
      <InputField
        placeholder='Enter your name'
        value={name}
        onChangeText={setName}
      />
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
      <InputField
        placeholder='Confirm your password'
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <PrimaryButton
        title="Register"
        onPress={handleRegister}
      />
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    gap: 12
  }
})