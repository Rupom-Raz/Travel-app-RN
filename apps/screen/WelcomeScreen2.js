import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import ButtonIcon from "../../components/ButtonIcon";
import { colors, spacing } from "../../theme";

const WelcomeScreen2 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    Find the best place {"\n"} for your journey
                </Text>
            </View>
            <View style={styles.firstRow}>
                <Image source={require("../../assets/images/img.png")} />
                <Image source={require("../../assets/images/img5.png")} />
                <Image source={require("../../assets/images/img4.png")} />
            </View>
            <View style={styles.secondRow}>
                <Image source={require("../../assets/images/img3.png")} />
                <Image source={require("../../assets/images/img5.png")} />
                <Image source={require("../../assets/images/img4.png")} />
                <Image source={require("../../assets/images/img6.png")} />
            </View>

            <View style={styles.bottomContainer}>
                <Text style={styles.bottomText}>
                    We’re happy to share our best tips for {"\n"} destinations
                    where you can relax. But you {"\n"} find the nicest city
                    trips as well!
                </Text>
            </View>
            <ButtonIcon onPress={() => navigation.navigate("WelcomeScreen3")} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.dark,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: spacing.large,
    },
    textContainer: {
        paddingTop: spacing.medium * 3,
    },
    text: {
        color: colors.white,
        fontFamily: "bold",
        fontSize: spacing.heading,
        textAlign: "center",
    },

    firstRow: {
        flexDirection: "row",
        paddingTop: spacing.mega,
        position: "relative",
        top: 40,
        right: 5,
    },
    secondRow: {
        width: spacing.width,
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    bottomContainer: {
        marginBottom: spacing.large * 4,
        alignItems: "flex-end",
    },

    bottomText: {
        color: colors.grayFont,
        textAlign: "center",
        fontSize: spacing.body,
    },
});

export default WelcomeScreen2;
