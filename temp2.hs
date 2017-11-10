import React from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView, ScrollView, TouchableHighlight, Image, } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import Menu from './menu.js'

// import Basics from './components/basics'
import Basics from './basics'

import DrawerButton from './DrawerButton'

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation
    drawer: () => {
      label: 'Home'
    }
    return {

      title: 'Home',
      headerLeft: <TouchableOpacity
        onPress={() => navigate('DrawerToggle')}><Image source={require('./assets/Drawer.png')} style={styles.stretch} /></TouchableOpacity>

    }
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ textAlign: "center", fontSize: 20 }}>See all Demos implemented by NMO</Text>

      </View>
    )
  }
}

export default App = () => <MainNavigator style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight / 2 }} />

const HomeNavigator = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  // Basics: {
  //   screen: Basics
  // }
})

const MainNavigator = DrawerNavigator({
  Home: {
    screen: HomeNavigator,
  },
  Basics: {
    screen: Basics
  }
})

const styles = StyleSheet.create({
  button: {
    margin: 3,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 7,
    fontSize: 18,
    fontWeight: "bold",
    color: 'white'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20
  },
  stretch: {
    width: 50,
    height: 50
  }

})





// Home: { screen: HomeScreen },
  // basics: { screen: Basics },
  // props: { screen: Props },
  // web: { screen: WhatToDo },
  // state: { screen: State },
  // style: { screen: Style },
  // fixedDim: { screen: FixedDimensions },
  // flexDim: { screen: FlexDimensions },
  // flexbox: { screen: Flexbox },
  // textInput: { screen: TextInput },
  // touch: { screen: Touches },
  // scrollViews: { screen: ScrollViews },
  // listViews: { screen: ListViews },
  // netWorking: { screen: NetWorking },



  /*<ScrollView>
        <Touchable onPress={() => navigate('web')} title="What I have to do" />
        <Touchable onPress={() => navigate('basics')} title="Basics" />
        <Touchable onPress={() => navigate('props')} title="Props" />
        <Touchable onPress={() => navigate('state')} title="State" />
        <Touchable onPress={() => navigate('style')} title="Style" />
        <Touchable onPress={() => navigate('fixedDim')} title="FixedWidthHeight" />
        <Touchable onPress={() => navigate('flexDim')} title="FlexWidthHeight" />
        <Touchable onPress={() => navigate('flexbox')} title="FlexBox" />
          <Touchable onPress={() => navigate('textInput')} title="TextInput" />
          <Touchable onPress={() => navigate('touch')} title="Touches" />
          <Touchable onPress={() => navigate('scrollViews')} title="ScrollViews" />
          <Touchable onPress={() => navigate('listViews')} title="ListViews" />
          <Touchable onPress={() => navigate('netWorking')} title="NetWorking" />
        </ScrollView> */





        // import WhatToDo from './components/whatToDo'
// import Props from './components/props'
// import State from './components/state'
// import Style from './components/style'
// import FixedDimensions from './components/heightWidth'
// import FlexDimensions from './components/heightWidthFlex'
// import Flexbox from './components/flexbox'
// import TextInput from './components/textInput'
// import Touches from './components/touches'
// import ScrollViews from './components/scrollView'
// import ListViews from './components/listViews'
// import NetWorking from './components/netWorking'

// Plase note that the "props" in this const is not related to the imported "Props" !!!!!!
// const Touchable = (props) => (
//   <TouchableOpacity style={styles.button} onPress={props.onPress}>
//     <Text style={styles.buttonText}>{props.title}</Text>
//   </TouchableOpacity>)
