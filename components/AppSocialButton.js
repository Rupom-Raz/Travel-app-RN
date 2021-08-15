import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors, spacing } from "../theme";

const AppSocialButton = ({ text, style, icon, onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <View style={styles.container}>
                <View style={{ ...styles.button, ...style }}>
                    <MaterialCommunityIcons
                        name={icon}
                        size={30}
                        color={colors.white}
                    />
                    <Text style={styles.text}>{text}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {
        width: spacing.width,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    button: {
        width: spacing.width / 2.3,
        height: 48,
        backgroundColor: colors.blue,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        borderRadius: spacing.medium,
    },
    text: {
        color: colors.white,
        fontSize: spacing.body,
    },
});

export default AppSocialButton;
