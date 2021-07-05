import React from "react";
import { createAppContainer, createSwitchNavigator} from "react-navigation";
import { Transition } from "react-native-reanimated";
import createAnimatedSwitchNavigator from "react-navigation-animated-switch";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Image } from "react-native";

import Home from "./screns/Home"
import Velocidade from "./screns/Velocidade"
import Configuracao from "./screns/Configuracao"
import Menu from "./Components/Menu"
import Calendario from './screns/Calendario'
import Blocks from './screns/Blocks'
import Formulario from "./screns/Formulario"

const menuConfig = {
    initialRouteName: 'Home',
    contentComponent: Menu,
    contentOption: {
        labelStyle: {
            fontWeight: 'normal',
            fontSize: 20
        },
        activeLabelStyle:{
            fontWeight: 'bold',
            color: '#080'
        }
    }
}

const menuRoutes = {
    Home,
    Velocidade,
    Configuracao,
    Calendario,
    Blocks,
    Formulario,
}



const MenuNavigator = createDrawerNavigator(menuRoutes, menuConfig)
export default createAppContainer(MenuNavigator)

