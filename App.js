import React, { Component } from 'react'
import { Platform } from 'react-native'
import { Constants } from 'expo'
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'


import { Tabs } from './router'
import Login from './screens/login/Login'
import store from './store'

const AppNavigator = StackNavigator (
  {
    Login: {
      screen: Login
    },
    Menu: {
      screen: Tabs
    },
    
  },
  {
    initialRouteName: 'Login',
    initialRouteParams: {...this.state},
    headerMode: 'screen',
    navigationOptions: {
      headerStyle: { height: 24 },
      headerLeft: null
    }
  }
)

export default () => (<Provider store={store}>
  <AppNavigator />
  </Provider>
)