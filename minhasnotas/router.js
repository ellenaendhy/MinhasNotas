import React, {Component} from 'react';
import { Dimensions, Platform} from 'react-native';
import {creatStackNavigator, createBottomTabNavigator, TabNavigator, StackNavigator} from 'react-navigator';
import {Icon} from 'react-native-elements';

import Notas from './screens/Notas';
import Materias from './screens/Materias';
import NovaNota from './screens/Novanota';
import Perfil from './screens/Perfil';
import Sobre from './screens/Sobre';

let screen = Dimension.get('window')

export const Tabs = createBonttomTabNavigator({
    'Notas': {
        screen: Notas;
        navigationOptions: {
          tabBarLabel: 'Notas',
          tabBarIcon: ({tintColor}) => <Icon name="list" type="entypo" size={28} color={tintColor} />
        },
    },
    'Materias': {
        screen: Materias;
        navigationOptions: {
          tabBarLabel: 'Materias',
          tabBarIcon: ({tintColor}) => <Icon name="list"  type="entypo" size={28} color={tintColor} />
        },
    },
    'Meu Perfil': {
        screen: Meu Perfil; 
        navigationOptions: {
          tabBarLabel: 'Meu Perfil',
          tabBarIcon: ({tintColor}) => <Icon name="list" type="entypo" size={28} color={tintColor} />
        },
    },
    'Novas Notas': {
        screen: Novas Notas;
        navigationOptions: {
          tabBarLabel: 'Novas Notas',
          tabBarIcon: ({tintColor}) => <Icon name="list"  type="entypo" size={28} color={tintColor} />
        },
    }, 
    'Sobre': {
        screen: Sobre;
        navigationOptions: {
          tabBarLabel: 'Sobre',
          tabBarIcon: ({tintColor}) => <Icon name="list" type="entypo" size={28} color={tintColor} />
        },
    },
  });