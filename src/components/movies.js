import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Cartelera = ({ peliInfo }) => {
    return (
        <View style = {styles.container}>
            <View style = {styles.image}>
                <Image style = {styles.image} source={{ uri: peliInfo.Poster }}/>
            </View>
            <View style = {styles.cardBio}>
                <Text style = {styles.title}>{ peliInfo.Title}</Text>
                <Text style = {styles.year}>{ peliInfo.Year }</Text>
            </View>
            
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#13244A",
        borderRadius: 5,
        margin: 20,
        padding: 0,
        alignItems: "stretch",
        width: 300,
    },
    title: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
    },
    year: {
        fontSize: 18,
        color: "#fff",
        textAlign:  "center",
    },
    cardBio: { flex: 1},
    image: {
        alignSelf: "center",
        width: 300,
        height: 445,
    }
});

export default Cartelera;