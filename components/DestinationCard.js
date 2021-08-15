import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors, spacing } from "../theme";

const DestinationCard = ({ text, image }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <View style={styles.textContainer}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingVertical: spacing.body,
        paddingHorizontal: spacing.body,
    },
    image: {
        borderRadius: 20,
        width: spacing.width - 100,
        height: spacing.height / 4,
    },
    textContainer: {
        width: spacing.width / 3,
        height: spacing.large,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: spacing.medium,
        backgroundColor: colors.white,
        position: "relative",
        top: -30,
        left: -50,
    },
    text: {
        fontSize: spacing.body,
    },
});

export default DestinationCard;
