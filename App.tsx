import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from './Components/Header'
import UpperSection from './Components/UpperSection'
import MiddleSec from './Components/MiddleSec'
import Login from './Components/Login'

const App = () => {
  return (
    <ScrollView >
      {/* <Header />
      <UpperSection />
      <MiddleSec /> */}
      <Login />
    </ScrollView>
  )
}

export default App