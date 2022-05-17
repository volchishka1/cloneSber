import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {SvgBottomHome} from "../assets/icons/IconSvgBottomHome";
import {SvgBottomSearch} from "../assets/icons/IconSvgBottomSearch";
import {SvgBottomSeeFavourite} from "../assets/icons/IconSvgBottomSeeFavourite";
import {SvgBottomProfile} from "../assets/icons/IconSvgBottomProfile";

export const Footer = () => {

    return (
        <View style={styles.container}>
            <SvgBottomHome />
            <SvgBottomSearch />
            <SvgBottomSeeFavourite />
            <SvgBottomProfile />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        color: "#4B4B4B",
        paddingTop: 50
    }
})
