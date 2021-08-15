import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors, spacing } from "../theme";

const AppButton = ({ text, style, onPress }) => {
    return (
        <>
            <TouchableOpacity
                style={{ marginBottom: spacing.small }}
                activeOpacity={0.8}
                onPress={onPress}
            >
                <View style={styles.container}>
                    <View style={{ ...styles.button, ...style }}>
                        <Text style={{ ...styles.text, ...style }}>{text}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </>
    );
};
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    button: {
        width: spacing.width - spacing.large,
        height: 48,
        backgroundColor: colors.green,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: spacing.medium,
    },
    text: {
        fontSize: spacing.description,
        color: colors.white,
    },
});

export default AppButton;
