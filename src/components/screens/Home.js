import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { fetchMetroPOP } from "../../api";
import CarteleraList from "../moviesList";

const Home = () => {
    const [pelis, setPelis] = useState({});

    const getPelisList = async () => {
        const response = await fetchMetroPOP();
        setPelis(response);
    };

    useEffect(() => {
        getPelisList();
    }, []);

    return (
        <ScrollView>
            <View>
                <>{pelis.Search ? <CarteleraList pelis = {pelis}/> : null}</>
            </View>
        </ScrollView>
    )
}

export default Home;