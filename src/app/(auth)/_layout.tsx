import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import { Stack } from 'expo-router'
import { useSegments, useRouter} from 'expo-router';
import { useAuth } from '@/context/AuthProvider';

const AuthLayout = () => {
   const { session, loading } = useAuth();
    const segments = useSegments();
    const router = useRouter();
    useEffect(() => {
        if (loading) return;
       
        if (!session) {
            router.replace("/(auth)/AuthScreen")
        }
        if (session) {
            router.replace("/(tabs)/home")
        }
    }, [session, loading])
    if (loading) return null;
    console.log("SESSION:", session);
  return (
    <Stack screenOptions={{headerShown:false}}/>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})