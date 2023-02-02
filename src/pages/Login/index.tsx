import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Login = () => {
  return (
    <SafeAreaView
    style={{
      flex: 1,
      backgroundColor: "#171626",
    }}
  >
    <Text style={{color: "white"}}>Login</Text>
  </SafeAreaView>
  )
}

export default Login