import { View, Text, ScrollView } from 'react-native'
import React from 'react'
// import Header from './Components/Header'
// import UpperSection from './Components/UpperSection'
// import MiddleSec from './Components/MiddleSec'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './Components/Login';


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App