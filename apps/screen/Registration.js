import React, { useContext, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";
import AppButton from "../../components/AppButton";
import AppSocialButton from "../../components/AppSocialButton";
import AppTextInput from "../../components/AppTextInput";
import KeyBoardAvoidComp from "../../components/KeyBoardAvoidComp";
import { colors, spacing } from "../../theme";
import { AuthContext } from "../Navigation/AuthProvider";

const { width, height } = Dimensions.get("screen");

const Registration = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { register } = useContext(AuthContext);

    return (
        <KeyBoardAvoidComp>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Create account</Text>
                    </View>
                    <Animatable.View
                        animation="fadeInDownBig"
                        style={styles.socialBtn}
                    >
                        <AppSocialButton
                            text="Facebook"
                            icon="facebook"
                            style={styles.fbBtn}
                        />
                        <AppSocialButton text="Google" icon="google" />
                    </Animatable.View>
                    <Text style={styles.description}>
                        or sign up with email{" "}
                    </Text>
                    <Animatable.View
                        animation="fadeInRightBig"
                        style={{ alignItems: "center" }}
                    >
                        <View style={styles.email}>
                            <AppTextInput
                                autoCapitalize="none"
                                onChangeText={(val) => setEmail(val)}
                                placeholder="Your email"
                                keyboardType="email-address"
                            />
                        </View>
                        <View style={styles.password}>
                            <AppTextInput
                                secureTextEntry={true}
                                placeholder="password"
                                onChangeText={(val) => setPassword(val)}
                            />
                        </View>
                    </Animatable.View>

                    <View>
                        <AppButton
                            onPress={() => register(email, password)}
                            text="Sign up"
                            style={{ backgroundColor: colors.blue }}
                        />
                        <Text
                            style={{
                                color: colors.white,
                                textAlign: "center",
                                paddingBottom: spacing.small,
                            }}
                        >
                            Already have an account?
                            <Text
                                style={{ color: colors.blue }}
                                onPress={() => navigation.navigate("Login")}
                            >
                                Log in
                            </Text>
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </KeyBoardAvoidComp>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height,
        backgroundColor: colors.dark,
        flexDirection: "column",
    },
    textContainer: {
        paddingVertical: spacing.large + 2,
        alignItems: "center",
    },
    text: {
        paddingVertical: spacing.medium,
        color: colors.white,
        fontSize: spacing.heading,
        fontFamily: "bold",
    },
    socialBtn: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    fbBtn: {
        backgroundColor: colors.fb,
    },

    description: {
        color: colors.white,
        fontSize: spacing.description,
        paddingVertical: spacing.large,
        textAlign: "center",
    },
});

export default Registration;
