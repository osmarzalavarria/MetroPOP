import React from "react";
import { StyleSheet, View } from "react-native";
import Cartelera from "./movies";

const CarteleraList = ({ pelis }) => {
    return (
        <View style = {styles.container}>
            {pelis.Search.map((peliInfo, index) => (
                <Cartelera key = {index} peliInfo = {peliInfo}/>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#040B24",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 0,
        marginRight: 0,
    },
});

export default CarteleraList;