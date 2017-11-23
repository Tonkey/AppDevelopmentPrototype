import React, { Component } from 'react'
import { TabNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements'

import Home from "./screens/home/Home";
import Classes from "./screens/classes/Classes";
import Attendance from "./screens/attendance/Attendance";
import HandIn from "./screens/handIn/Hand-in";
import HelpPage from "./screens/help/Help";

export const Tabs = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({tintColor}) => <Icon name='list' size={35} color={tintColor} />
        }
    },
    Classes: {
        screen: Classes,
        navigationOptions: {
            tabBarLabel: 'Classes',
            tabBarIcon: ({tintColor}) => <Icon name='school' size={35} color={tintColor} />
        }
    },
    Attendance: {
        screen: Attendance,
        navigationOptions: {
            tabBarLabel: 'Attendance',
            tabBarIcon: ({tintColor}) => <Icon name='list' size={35} color={tintColor} />
        }
    },
    HandIn: {
        screen: HandIn,
        navigationOptions: {
            tabBarLabel: 'Hand-in',
            tabBarIcon: ({tintColor}) => <Icon name='list' size={35} color={tintColor} />
        }
    },
    HelpPage: {
        screen: HelpPage,
        navigationOptions: {
            tabBarLabel: 'Help',
            tabBarIcon: ({tintColor}) => <Icon name='list' size={35} color={tintColor} />
        }
    },
},
    {
        initialRouteName: 'Home',
        lazy: true,
        tabBarOptions: {
            // showIcon: true,
            // overflow: true,
            scrollEnabled: true
        },
    }
);