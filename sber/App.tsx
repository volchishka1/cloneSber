import React from 'react';
import {View} from 'react-native';
import { colors } from './constants';
import { Balance } from './src/components/Balance';
import { Cards } from './src/components/Cards';
import { Footer } from './src/components/Footer';
import {Header} from "./src/components/Header";
import { QuickActions } from './src/components/QuickActions';


export const App = () => {


  return (
      <View
      style={{
          padding: 24,
          paddingTop: 55,
          paddingBottom: 60,
          backgroundColor: colors.BG_GRAY,
      }}>
          <View style={{height: "100%"}}>
              <Header />
              <Cards />
              <Balance />
              <QuickActions />
          </View>
          <Footer />
      </View>
  )
};

