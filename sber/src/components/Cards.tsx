import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import {colors} from "../../constants";
import {useAuth} from "../useAuth";


const cards = [
    {
        id: 'wewrwr',
        number: "4562 1122 4595 7852",
        type: "Mastercard",
        balance: 92510
    },
    {
        id: 'wewrw12312r',
        number: "4562 2211 4595 7852",
        type: "Visa",
        balance: 12510
    },
    {
        id: 'wewrwdsdf12312r',
        number: "4562 4423 4595 7852",
        type: "Maestro",
        balance: 22510
    },
]
export const Cards = () => {
    const {user} = useAuth()

    return (
        <View style={{marginVertical: 50, position: "relative", height: 500, overflow: "hidden"}}>
            {
                cards.map((card, index) => (
                    <View
                        key={card.id}
                        style={{
                            backgroundColor: colors.ACCENT,
                            borderRadius: 30,
                            padding: 20,
                            position: index !== 0 ? "absolute" : "relative",
                            top: index === 1 ? 14 : index === 2 ? 33 : 0,
                            left: index === 1 ? 9 : index === 2 ? 9 : 0,
                            width: "100%",
                            zIndex: index === 1 ? 2 : index === 2 ? 1 : 3,
                            transform: [{rotate: index === 1 ? "10deg" : index === 2 ? "18deg" : "0deg"}],
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5,
                        }}>
                        <Image source={require("../assets/images/chipIcon.png")}/>
                        <Text style={styles.cardNumber}>{card.number}</Text>
                        <View style={styles.flexDefault}>
                            <View>
                                <Text style={{
                                    color: "white",
                                    textTransform: "uppercase",
                                    fontSize: 10,
                                    marginBottom: 6
                                }}>Card holder</Text>
                                <Text style={{
                                    color: "white",
                                    textTransform: "uppercase",
                                    fontSize: 14
                                }}>{user.name}</Text>
                            </View>
                            <View>
                                <Image style={styles.card}
                                       source={require("../assets/images/Mastercard.png")}/>
                            </View>
                        </View>
                    </View>
                ))
            }
        </View>
    )
}


const styles = StyleSheet.create({
    flexDefault: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    boxShadow: {
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    cardContainer: {
        backgroundColor: colors.ACCENT,
        borderRadius: 30,
        padding: 15,
        position: "relative",
        top: 0,
        left: 0,
        width: "100%",
    },
    card: {
        width: 93,
        height: 69,
    },
    cardNumber: {
        color: "white",
        fontSize: 24,
        marginVertical: 20
    }
})
