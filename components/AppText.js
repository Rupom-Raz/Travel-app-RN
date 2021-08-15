import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, spacing } from "../theme";

const AppText = ({ text }) => {
    return (
        <View>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    text: {
        color: colors.white,
        fontFamily: "bold",
        fontSize: spacing.heading,
        textAlign: "center",
    },
});

export default AppText;
