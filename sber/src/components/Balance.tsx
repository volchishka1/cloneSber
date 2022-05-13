import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {colors} from "../../constants";

export const Balance = () => {
    const card = {balance: 92510}

    return (
        <View style={{ marginBottom: 20}}>
            <Text style={styles.balanceName}>Balance</Text>
            <Text style={styles.balanceValue}>${card.balance}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    balanceName: {
        color: colors.TEXT_GRAY,
        fontSize: 18,
        marginBottom: 6,
    },
    balanceValue: {
        color: "white",
        fontSize: 24,
        fontWeight: "700",
    },
})
