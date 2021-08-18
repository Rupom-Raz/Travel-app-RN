import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, spacing } from "../theme";

const Badge = ({ text, style }) => {
    return (
        <View style={{ ...styles.container, ...style }}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        marginVertical: spacing.small,
        backgroundColor: colors.green,
        width: spacing.width < 350 ? spacing.width / 2 : spacing.width / 2.5,
        height: spacing.height / 28,
        alignItems: "center",
        justifyContent: "center",
        borderTopRightRadius: spacing.medium,
        borderBottomRightRadius: spacing.medium,
    },
    text: {
        color: colors.white,
        fontSize: spacing.body,
    },
});
export default Badge;
