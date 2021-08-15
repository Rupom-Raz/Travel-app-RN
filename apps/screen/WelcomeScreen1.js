import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";
import ButtonIcon from "../../components/ButtonIcon";
import { colors, spacing } from "../../theme";

const WelcomeScreen1 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Animatable.View
                animation="fadeInDownBig"
                style={styles.textContainer}
            >
                <Text style={styles.text}>
                    Get inspiration {"\n"} for your next trip
                </Text>
            </Animatable.View>

            <ScrollView
                showsHorizontalScrollIndicator={false}
                style={styles.slider}
                horizontal={true}
            >
                <Image
                    style={styles.image}
                    source={require("../../assets/images/welcome1.png")}
                />
                <Image
                    style={styles.image}
                    source={require("../../assets/images/welcome2.png")}
                />
                <Image
                    style={styles.image}
                    source={require("../../assets/images/welcome3.png")}
                />
            </ScrollView>

            <View style={styles.bottomContainer}>
                <Text style={styles.bottomText}>
                    We’re happy to share our best tips for {"\n"} destinations
                    where you can relax. But you {"\n"} find the nicest city
                    trips as well!
                </Text>
            </View>
            <ButtonIcon onPress={() => navigation.navigate("WelcomeScreen2")} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.dark,
        alignItems: "center",
        paddingBottom: spacing.large,
    },
    textContainer: {
        paddingTop: spacing.medium * 7,
    },
    text: {
        color: colors.white,
        fontFamily: "bold",
        fontSize: spacing.heading,
        textAlign: "center",
    },
    slider: {
        paddingTop: spacing.large,
    },
    image: {
        resizeMode: "cover",
        width: 150,
        height: 250,
        borderRadius: 20,
        marginHorizontal: spacing.medium,
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

export default WelcomeScreen1;
