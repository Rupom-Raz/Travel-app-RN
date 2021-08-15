import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors, spacing } from "../theme";

const VectorComponent = ({ image, text }) => {
    return (
        <View style={styles.container}>
            <Image source={image} />
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        padding: spacing.body,
        alignItems: "center",
    },
    text: {
        color: colors.white,
        fontSize: spacing.body,
    },
});

export default VectorComponent;
