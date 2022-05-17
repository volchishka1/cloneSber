import React, {useState} from 'react';
import {Button, StyleSheet, TextInput} from "react-native";
import {login} from "../database/firebase";

export const AuthForm = () => {

    const [email, setEmail] = useState('test@test.ru');
    const [password, setPassword] = useState('');

    return (
        <>
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                autoFocus
                placeholder="Enter email"/>
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder="Enter email"
                secureTextEntry={true}
            />
            <Button
                onPress={async () => await login(email, password)}
                title='Sign in'
                color={'black'}
            />
        </>
    )
}



const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
    }
})
