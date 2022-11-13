
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MyStatusBar from "../Components/MyStatusBar";
import SideDrawer from "../Components/Drawer/Side.drawer";
import TabNavigator from "./Tab.navigator";

// ==============================================================


import ListOfferScreen from "../Entities/Offer/List.offer.screen";
import ShowOfferScreen from "../Entities/Offer/Show.offer.screen";
import ListAddressScreen from "../Entities/Address/List.address.screen";
import ShowAddressScreen from "../Entities/Address/Show.address.screen";
import ListUserScreen from "../Entities/User/List.user.screen";
import ShowUserScreen from "../Entities/User/Show.user.screen";


// ==============================================================

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// ==============================================================

const stackrops = {
  initialRouteName: "Tabs",
};

const screenOptions = {
  headerShown: true,
  header: (props: any) => <MyStatusBar {...props} />,
};

// ==============================================================

const StackTabNavigator = () => {
  return (
    <Stack.Navigator {...stackrops}>
      <Stack.Screen
        name="HomeTabNavigator"
        component={TabNavigator}
        options={screenOptions}
      />
      
        <Stack.Screen
            name="ListOfferScreen"
            component={ListOfferScreen}
            options={screenOptions}
          />
          <Stack.Screen
          name="ShowOfferScreen"
          component={ShowOfferScreen}
          options={screenOptions}
        />
        
        <Stack.Screen
            name="ListAddressScreen"
            component={ListAddressScreen}
            options={screenOptions}
          />
          <Stack.Screen
          name="ShowAddressScreen"
          component={ShowAddressScreen}
          options={screenOptions}
        />
        
        <Stack.Screen
            name="ListUserScreen"
            component={ListUserScreen}
            options={screenOptions}
          />
          <Stack.Screen
          name="ShowUserScreen"
          component={ShowUserScreen}
          options={screenOptions}
        />
        
    </Stack.Navigator>
  );
};

// ==============================================================

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeStackTabNavigator"
      // @ts-ignore
      drawerStyle={{ width: wp(70) }}
      edgeWidth={15}
      screenOptions={{ swipeEnabled: true, headerShown: false }}
      drawerPosition="right"
      drawerContent={(props) => <SideDrawer {...props} />}
    >
      <Drawer.Screen
        name="HomeStackTabNavigator"
        component={StackTabNavigator}
      />
    </Drawer.Navigator>
  );
}
