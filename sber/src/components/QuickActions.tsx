import React from "react";
import {Alert, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from "react-native";
import {colors} from "../../constants";
import {IconSvgBriefcase} from "../assets/icons/IconSvgBriefcase";
import {IconSvgMoney} from "../assets/icons/IconSvgMoney";

export const QuickActions = () => {

    const makeTransaction = (value: number) => {
        console.log(value)
    }

    return (
        <View style={styles.container}>
            <TouchableHighlight
                style={{
                    justifyContent: "center",
                    borderRadius: 30,
                    padding: 20,
                    backgroundColor: "#2C2C2C"
                }}
                onPress={() => makeTransaction(610)}
            >
                <View style={{alignItems: "center"}}>
                    <IconSvgMoney/>
                    <Text style={{
                        color: "white",
                        fontSize: 16,
                        marginTop: 10,
                        fontWeight: "bold"
                    }}>Salary</Text>
                    <Text style={{color: colors.TEXT_GRAY, fontSize: 14, marginBottom: 4}}>Belong
                        Interactive</Text>
                    <Text style={{color: "white", fontSize: 16, marginTop: 10}}>$100</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight
                style={{
                    justifyContent: "center",
                    borderRadius: 30,
                    padding: 20,
                    backgroundColor: "#2C2C2C"
                }}
                onPress={() => makeTransaction(610)}
            >
                <View style={{alignItems: "center"}}>
                    <IconSvgMoney/>
                    <Text style={{
                        color: "white",
                        fontSize: 16,
                        marginTop: 10,
                        fontWeight: "bold"
                    }}>Paypal</Text>
                    <Text style={{color: colors.TEXT_GRAY, fontSize: 14, marginBottom: 4}}>Freelance
                        payment</Text>
                    <Text style={{color: "white", fontSize: 16, marginTop: 10}}>$610</Text>
                </View>
            </TouchableHighlight>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#4B4B4B",
    }
})
