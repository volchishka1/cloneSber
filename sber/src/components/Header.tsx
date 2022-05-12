import React from "react";
import {Image, Linking, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useAuth} from "../useAuth";

export const Header = () => {
    const {user} = useAuth()

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.user}>Hi {user?.name}</Text>
                <Text style={styles.returnPhrase}>Welcome back</Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => Linking.openURL("https://www.google.ru/")}>
                    <Image
                        source={{uri: "https://sun9-31.userapi.com/s/v1/ig2/07puDBaIAtnQPdW82nTuw10WYdgWkHRzARB5gCgRSO1roVfvKNWrPWOROLnxH3rsWLcZJhoGfVcEyrBaLWOFFY6U.jpg?size=810x1080&quality=96&type=album"}}
                        style={styles.imageProfile}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    user: {
        color: "white",
        fontSize: 24,
        fontWeight: "700",
        marginBottom: 6
    },
    returnPhrase: {
        color: "#8D9699",

    },
    imageProfile: {
        width: 50,
        height: 50,
        borderRadius: 50/2,
    }

})
