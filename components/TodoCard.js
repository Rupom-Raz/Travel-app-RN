import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors, spacing } from "../theme";

const TodoCard = ({ image, title, place }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <View style={styles.details}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.place}>{place}</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingVertical: spacing.body,
    },
    details: {
        width: 180,
        paddingTop: spacing.small,
    },
    image: {
        borderRadius: 20,
        width: spacing.width - 100,
        height: spacing.height / 4,
        width: 148,
        height: 250,
        resizeMode: "cover",
    },
    title: {
        color: colors.white,
        fontSize: spacing.body,
    },
    place: {
        color: colors.grayFont,
        fontSize: spacing.body,
    },
});

export default TodoCard;
