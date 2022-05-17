import React from 'react';
import {Button, View} from "react-native";
import {colors} from "../../constants";
import {logout} from "../database/firebase";

export const Logout = () => {

    return  <Button title="Logout" color={colors.BG_GRAY} onPress={logout}/>

}
