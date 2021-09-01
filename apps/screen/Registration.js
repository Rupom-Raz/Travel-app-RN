import * as firebase from "firebase";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";
import AppButton from "../../components/AppButton";
import AppSocialButton from "../../components/AppSocialButton";
import AppTextInput from "../../components/AppTextInput";
import Loading from "../../components/Loading";
import { colors, spacing } from "../../theme";

const Registration = ({ navigation }) => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [loading, setIsLoading] = useState(false);
    const [password, setPassword] = useState();

    if (loading) {
        return <Loading />;
    } else {
        return (
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
                <Text style={styles.description}>or sign up with email </Text>
                <Animatable.View
                    animation="fadeInRightBig"
                    style={{ alignItems: "center" }}
                >
                    <View style={styles.name}>
                        <AppTextInput
                            onChangeText={(val) => setName(val)}
                            placeholder="Your name"
                        />
                    </View>
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
                        onPress={() => {
                            if (name && email && password) {
                                setIsLoading(true);
                                firebase.default
                                    .auth()
                                    .createUserWithEmailAndPassword(
                                        email,
                                        password
                                    )
                                    .then((userCredential) => {
                                        setIsLoading(false);
                                        firebase.default
                                            .database()
                                            .ref(
                                                `users/${userCredential.user.uid}`
                                            )
                                            .set({
                                                name: name,
                                                email: email,
                                            });
                                    })
                                    .catch((err) => console.log(err));
                            } else {
                                setIsLoading(false);
                                alert("Field can't be empty");
                            }
                        }}
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
        );
    }
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flex: 1,
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
