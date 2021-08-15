import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors, spacing } from "../theme";

const HotelCard = ({ image, price, name }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <View style={styles.details}>
                <Text style={styles.name}>{name}</Text>
                <View style={styles.star}>
                    <Image
                        style={{ marginLeft: 5 }}
                        source={require("../assets/images/star.png")}
                    />
                    <Image
                        style={{ marginLeft: 5 }}
                        source={require("../assets/images/star.png")}
                    />
                    <Image
                        style={{ marginLeft: 5 }}
                        source={require("../assets/images/star.png")}
                    />
                    <Image
                        style={{ marginLeft: 5 }}
                        source={require("../assets/images/star.png")}
                    />
                    <Image
                        style={{ marginLeft: 5 }}
                        source={require("../assets/images/star.png")}
                    />
                </View>
                <Text style={styles.price}>
                    {price}/
                    <Text
                        style={{
                            color: colors.grayFont,
                            fontSize: spacing.body,
                        }}
                    >
                        per night
                    </Text>
                </Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingLeft: spacing.body,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingVertical: spacing.small,
    },
    image: {
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 20,
    },
    details: {
        paddingLeft: spacing.small,
        width: spacing.width,
        backgroundColor: colors.secondary,
        flexDirection: "column",
        paddingVertical: spacing.small,
    },
    name: {
        fontSize: spacing.body,
        color: colors.white,
        paddingBottom: spacing.small,
        letterSpacing: 1,
    },
    star: {
        flexDirection: "row",
        paddingBottom: spacing.small,
        justifyContent: "flex-start",
    },
    price: {
        fontSize: spacing.description,
        color: colors.white,
        paddingBottom: spacing.small,
        letterSpacing: 1,
    },
});

export default HotelCard;
