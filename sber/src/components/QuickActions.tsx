import React from "react";
import {
    Alert,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from "react-native";
import {colors} from "../../constants";
import {IconSvgMoney} from "../assets/icons/IconSvgMoney";
import {addDoc, collection, serverTimestamp} from "firebase/firestore";
import { db } from "../database/firebase";

export const QuickActions = () => {

    const makeTransaction = async (value: number) => {
        const collectionRef = collection(db, 'transactions')
        const payload = {
            card_from: "1234 5678 9843 3567",
            card_to: "4561 1122 4567 4321",
            created_at: serverTimestamp(),
            value,
        }

        try {
            await addDoc(collectionRef, payload)

            Alert.alert('✅ Transaction completed!')
        } catch (error) {
            Alert.alert("error")
        }
    }

    return (
        <View style={styles.container}>
            <TouchableHighlight
                style={styles.touchable}
                onPress={() => makeTransaction(100)}
            >
                <View style={{alignItems: "center"}}>
                    <IconSvgMoney/>
                    <Text style={styles.name}>Salary</Text>
                    <Text style={styles.descriptionName}>Belong
                        Interactive</Text>
                    <Text style={styles.totalCash}>$100</Text>
                </View>
            </TouchableHighlight>
            <TouchableHighlight
                style={styles.touchable}
                onPress={() => makeTransaction(610)}
            >
                <View style={{alignItems: "center"}}>
                    <IconSvgMoney/>
                    <Text style={styles.name}>Paypal</Text>
                    <Text style={styles.descriptionName}>Freelance payment</Text>
                    <Text style={styles.totalCash}>$610</Text>
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
    },
    touchable: {
        justifyContent: "center",
        borderRadius: 30,
        padding: 20,
        backgroundColor: "#2C2C2C"
    },
    name: {
        color: "white",
        fontSize: 16,
        marginTop: 10,
        fontWeight: "bold"
    },
    descriptionName: {
        color: colors.TEXT_GRAY,
        fontSize: 14,
        marginBottom: 4
    },
    totalCash: {
        color: "white",
        fontSize: 16,
        marginTop: 10,
    }
})
