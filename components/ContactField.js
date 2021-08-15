import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Caption, Paragraph } from "react-native-paper";
import { colors, spacing } from "../theme";

const ContactField = ({ value, label, image }) => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.label}>
                    <Caption
                        style={{
                            color: colors.grayFont,
                            fontSize: spacing.body,
                        }}
                    >
                        {label}
                    </Caption>
                </View>
                <View style={styles.value}>
                    {image && (
                        <Image
                            style={{ marginRight: spacing.body }}
                            source={require("../assets/images/gold.png")}
                        />
                    )}
                    <Paragraph
                        style={{ color: colors.white, fontSize: spacing.body }}
                    >
                        {value}
                    </Paragraph>
                </View>
            </View>
            <View style={styles.border}></View>
        </>
    );
};

export default ContactField;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: spacing.heading,
    },
    border: {
        marginTop: spacing.body,
        width: spacing.width - 30,
        height: 1.3,
        backgroundColor: colors.grayFont,
        marginLeft: spacing.medium,
        marginBottom: spacing.large,
    },
    value: {
        flexDirection: "row",
    },
});
