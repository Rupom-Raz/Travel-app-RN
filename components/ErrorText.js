import React from "react";
import { StyleSheet, Text } from "react-native";

const ErrorText = ({ children }) => {
    return <Text style={styles.text}>{children}</Text>;
};
const styles = StyleSheet.create({
    text: {
        color: "red",
    },
});

export default ErrorText;
