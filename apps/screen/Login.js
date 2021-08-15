import React, { useContext, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
import AppButton from "../../components/AppButton";
import AppSocialButton from "../../components/AppSocialButton";
import AppTextInput from "../../components/AppTextInput";
import { colors, spacing } from "../../theme";
import { AuthContext } from "../Navigation/AuthProvider";

const Login = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { login, fbLogin, googleSign } = useContext(AuthContext);

    return (
        <>
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Log in</Text>
                </View>

                <Animatable.View
                    animation="bounceInDown"
                    style={styles.socialBtn}
                >
                    <AppSocialButton
                        onPress={() => fbLogin()}
                        text="Facebook"
                        icon="facebook"
                        style={styles.fbBtn}
                    />
                    <AppSocialButton
                        onPress={() => googleSign()}
                        text="Google"
                        icon="google"
                        style={{ backgroundColor: "#4285F4" }}
                    />
                </Animatable.View>

                <Text style={styles.description}>or log in with email </Text>
                <Animatable.View
                    animation="fadeInRightBig"
                    style={{ alignItems: "center" }}
                >
                    <View style={styles.email}>
                        <AppTextInput
                            onChangeText={(val) => setEmail(val)}
                            autoCapitalize="none"
                            placeholder="Your email"
                            keyboardType="email-address"
                        />
                    </View>
                    <View style={styles.pass}>
                        <AppTextInput
                            onChangeText={(val) => setPassword(val)}
                            secureTextEntry={true}
                            placeholder="Your password"
                        />
                    </View>
                </Animatable.View>
                <TouchableOpacity activeOpacity={0.4} onPress={() => {}}>
                    <Text style={styles.forget}>Forget password?</Text>
                </TouchableOpacity>
                <Animatable.View
                    animation="fadeIn"
                    style={{ marginTop: spacing.small }}
                >
                    <AppButton
                        onPress={() => login(email, password)}
                        text="Log in"
                        style={{ backgroundColor: colors.blue }}
                    />
                    <Text
                        style={{
                            color: colors.white,
                            marginTop: spacing.mega,
                            textAlign: "center",
                            paddingBottom: spacing.small,
                        }}
                    >
                        Don't have an account?
                    </Text>
                    <AppButton
                        onPress={() => navigation.navigate("Registration")}
                        text="Sign up"
                        style={{
                            backgroundColor: colors.white,
                            color: colors.dark,
                        }}
                    />
                </Animatable.View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.dark,
        flexDirection: "column",
    },
    textContainer: {
        paddingVertical: spacing.section,
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
    forget: {
        marginTop: -10,
        color: colors.white,
        marginLeft: 160,
    },
});

export default Login;
