import React from "react";
import {
    FlatList,
    ImageBackground,
    StyleSheet,
    Text,
    View,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { HeroData } from "../apps/Data/Data";
import { colors, spacing } from "../theme";
import AppButton from "./AppButton";
import AppText from "./AppText";

const HeroCarousel = () => {
    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                decelerationRate={"fast"}
                pagingEnabled
                data={HeroData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <ImageBackground style={styles.image} source={item.image}>
                        <Animatable.View
                            animation="fadeInDownBig"
                            style={styles.detailsSection}
                        >
                            <AppText text={item.title} />
                            <Text style={styles.description}>
                                {item.description}
                            </Text>
                            <AppButton
                                text="Book Now"
                                style={{
                                    backgroundColor: colors.blue,
                                    width: spacing.width / 2,
                                    textAlign: "center",
                                }}
                            />
                        </Animatable.View>
                    </ImageBackground>
                )}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    detailsSection: {
        alignItems: "flex-start",
        paddingTop: spacing.mega * 3,
        paddingHorizontal: spacing.medium,
    },
    image: {
        width: spacing.width,
        height: spacing.height / 1.8,
        resizeMode: "contain",
    },
    description: {
        color: colors.white,
        fontSize: spacing.description,
        lineHeight: spacing.description + 10,
        paddingBottom: spacing.medium,
    },
});

export default HeroCarousel;
