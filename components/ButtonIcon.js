import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { colors, spacing } from "../theme";

const ButtonIcon = ({ onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <View style={styles.button}>
                <MaterialCommunityIcons
                    name="arrow-right"
                    size={spacing.large}
                    color={colors.white}
                />
            </View>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        width: spacing.mega,
        height: spacing.mega,
        backgroundColor: colors.light,
        borderRadius: spacing.mega,
    },
});

export default ButtonIcon;
