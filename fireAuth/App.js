import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUpScreen from "./src/screens/SignUpScreen";
import SignInScreen from "./src/screens/SignInScreen";
import * as firebase from 'firebase';

import { AuthContext, AuthProvider } from "./src/providers/AuthProvider";
const AuthStack = createStackNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyBZ0U4i8gwkeSN_Ia184ROzcifpfiwGrPg",
  authDomain: "projectauth-68a00.firebaseapp.com",
  projectId: "projectauth-68a00",
  storageBucket: "projectauth-68a00.appspot.com",
  messagingSenderId: "551639822400",
  appId: "1:551639822400:web:6b3419c1eb03213798afa5"
};

if(!firebase.apps.length)
{
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
}


const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator initialRouteName="SignIn">
      <AuthStack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};

function App() {
  return (
    <AuthProvider>
      <AuthContext.Consumer>
        {(auth) => (
          <NavigationContainer>
            {auth.IsLoggedIn ? < SomeScreen /> : <AuthStackScreen />}
          </NavigationContainer>
        )}
      </AuthContext.Consumer>
    </AuthProvider>
  );
}

export default App;
