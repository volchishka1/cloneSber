import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from './constants';
import {Balance} from './src/components/Balance';
import {Cards} from './src/components/Cards';
import {Footer} from './src/components/Footer';
import {Header} from "./src/components/Header";
import {QuickActions} from './src/components/QuickActions';
import {db} from './src/database/firebase';
import {useAuth} from "./src/useAuth";
import {Logout} from "./src/components/Logout";
import {collection, onSnapshot, query, where} from "firebase/firestore";
import {AuthForm} from "./src/components/AuthForm";


export const App = () => {
    const {isLoggedIn, user} = useAuth();
    const [cards, setCards] = useState([]);

    useEffect(() => {
        if(user?.uid) {
            const collectionRef = collection(db, 'cards')
            const q = query(collectionRef, where('userId', '==', user.uid))

            const unSub = ()  => {
                onSnapshot(q,snapshot => {
                    setCards(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
                })
            }

            return unSub
        }
    }, [])

    return (
        <View style={styles.container}>
            <View>
                {isLoggedIn ? <>
                    <Header/>
                    <Cards cards={cards}/>
                    <Balance cards={cards}/>
                    <QuickActions/>
                    <Logout/>
                    <Footer/>
                </> : (
                    <AuthForm />
                )}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 24,
        paddingTop: 25,
        paddingBottom: 60,
        backgroundColor: colors.BG_GRAY,
        height: "100%"
    }
})

