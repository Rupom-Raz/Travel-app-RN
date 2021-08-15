import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors, spacing } from "../theme";

const PlaceCard = ({
    name,
    price,
    image,
    containerStyle,
    placeName,
    priceStyle,
}) => {
    return (
        <View style={{ ...styles.container, ...containerStyle }}>
            <Image style={styles.image} source={image}></Image>
            <Text style={{ ...styles.placeName, ...placeName }}>{name}</Text>
            <View style={{ ...styles.priceContainer, ...priceStyle }}>
                <Text style={styles.price}>{price}</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        width: spacing.width,
        alignItems: "center",
        flexDirection: "column",
        paddingVertical: spacing.medium,
    },
    image: {
        width: "90%",
        height: spacing.height < 650 ? 130 : 157,
        resizeMode: "cover",
        borderRadius: spacing.large,
    },
    placeName: {
        color: colors.white,
        fontSize: spacing.heading,
        fontFamily: "bold",
        position: "relative",
        top: -95,
    },
    priceContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: spacing.large,
        width: spacing.mega + 10,
        height: spacing.mega - 20,
        backgroundColor: colors.dark,
        position: "relative",
        top: -70,
        left: 100,
    },
    price: {
        color: colors.white,
    },
});

export default PlaceCard;
