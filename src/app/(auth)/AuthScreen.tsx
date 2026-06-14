import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import LoginScreen from './LoginScreen'
import RegisterScreen from './Register'

const AuthScreen = () => {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        {isLogin ? <Text style={styles.title}>Welcome Back</Text> : <Text style={styles.title}>Create an Account</Text>}
        {isLogin ? <LoginScreen /> : <RegisterScreen />}
      </View>
      <View style={styles.footer}>
        <Text>{isLogin ? "Don't have an account?" : "Already have an account?"}</Text>
        <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
          <Text style={styles.LinkText}>{isLogin ? "Register" : "Login"}</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default AuthScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },

  formContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  LinkText: {
    fontWeight: '500',
    color: "#0575f5",
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: "#0575f5",
    textAlign: 'center',
    marginBottom: 10
  },
   footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 12,
    marginBottom: 40
  },
})