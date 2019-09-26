import React, { Component } from 'react';
import {
    Dimensions,
} from 'react-native';

import { StackNavigator } from "react-navigation";
import { TabNavigator } from "react-navigation";

import Home from "./containers/Home";
import Player from "./containers/Player";
import Tab2 from "./containers/Tab2";
import Tab3 from "./containers/Tab3";
import Tab4 from "./containers/Tab4";


var { width, height } = Dimensions.get("window");

console.disableYellowBox = true;

/**
 * HOME TAB
 */
const HomeStackNavigator = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            header: null,

        },

        initialRouteName: "Home"
    },
    Player: {
        screen: Player,
        navigationOptions: {
            header: null
        }
    }
});

/**
 *  TAB 2
 */
const Tab2StackNavigator = StackNavigator({
    Analytics: {
        screen: Tab2,
        navigationOptions: {
            header: null
        },
        initialRouteName: "Tab2"
    }
}
);

/**
 * TAB 3
 */
const Tab3StackNavigator = StackNavigator({
    Notification: {
        screen: Tab3,
        navigationOptions: {
            header: null
        },
        initialRouteName: "Tab3"
    }
}
);

/**
 * TAB 4
 */
const Tab4StackNavigator = StackNavigator({
    Profile: {
        screen: Tab4,
        navigationOptions: {
            header: null
        },
        initialRouteName: "Tab4"
    },
    Setting: {
        screen: SettingScreen,
        navigationOptions: {
            header: null
        }
    }
}
);

const MainTapNavigator = TabNavigator({
    Home: {
        screen: HomeStackNavigator,
        navigationOptions: {

        }
    },
    Tab2: {
        screen: Tab2StackNavigator,
        navigationOptions: {


        }
    },
    Tab3: {
        screen: Tab3StackNavigator,
        navigationOptions: {

        }
    },
    Tab4: {
        screen: Tab4StackNavigator,
        navigationOptions: {

        }
    }
},
    {
        navigationOptions: {
            header: null
        },
        tabBarPosition: "bottom",
        lazy: false,
        swipeEnable: false,
        animationEnabled: false,
        tabBarOptions: {
            activeTintColor: "black",
            inactiveTintColor: "white",
            labelStyle: { fontSize: 15, width: width / 4 },
            showIcon: "false",
            showLabel: "true",
            style: { backgroundColor: "white" },
            indicatorStyle: { opacity: 1 }
        }
    }
);

const App = StackNavigator(
    {
        Home: { screen: MainTapNavigator },
    },
    {
        initialRouteName: "Home",
        navigationOptions: {
            header: null
        }
    }
);


export default App;