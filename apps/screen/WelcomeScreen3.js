import React from "react";
import { StyleSheet, View } from "react-native";
import AppButton from "../../components/AppButton";
import AppText from "../../components/AppText";
import PlaceCard from "../../components/PlaceCard";
import { colors, spacing } from "../../theme";

const WelcomeScreen3 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <AppText text="Find your best place" />
            <PlaceCard
                name="Rome"
                price="$420"
                image={require("../../assets/images/rome.png")}
            />
            <View style={styles.cardContainer}>
                <PlaceCard
                    containerStyle={{ width: spacing.width / 2 }}
                    placeName={{ left: 5 }}
                    image={require("../../assets/images/paris.png")}
                    name="Paris"
                    priceStyle={{ left: 40 }}
                    price="$300"
                />
                <PlaceCard
                    containerStyle={{ width: spacing.width / 2 }}
                    placeName={{ left: 0 }}
                    priceStyle={{ left: 40 }}
                    image={require("../../assets/images/newyork.png")}
                    name="New York"
                    price="$260"
                />
            </View>
            <View style={styles.bottomContainer}>
                <PlaceCard
                    image={require("../../assets/images/london.png")}
                    name="London"
                    price="$650"
                />
            </View>
            <View style={styles.button}>
                <AppButton
                    onPress={() => navigation.navigate("Home")}
                    text="Get Started"
                    style={{ backgroundColor: colors.blue }}
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        height: spacing.height - 20,
        flex: 1,
        justifyContent: "center",
        paddingTop: spacing.medium,
        backgroundColor: colors.dark,
    },
    cardContainer: {
        flexDirection: "row",
        marginTop: -80,
    },
    bottomContainer: {
        marginTop: -80,
    },
    button: {
        marginTop: -50,
    },
});

export default WelcomeScreen3;
