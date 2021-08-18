import * as firebase from "firebase";
import React, { useContext, useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Avatar, Caption, Title } from "react-native-paper";
import AppButton from "../../components/AppButton";
import ContactField from "../../components/ContactField";
import { colors, spacing } from "../../theme";
import { AuthContext } from "../Navigation/AuthProvider";

const UserProfile = () => {
    const [logedInUser, setLogedInUser] = useState({
        username: "",
        userPhoto: "",
        email: "",
    });
    const { user, logOut } = useContext(AuthContext);

    useEffect(() => {
        firebase.default
            .database()
            .ref("google")
            .child("113206996635231085510")
            .once("value", (snap) => {
                const data = snap.val();

                setLogedInUser({
                    username: data.name,
                    userPhoto: data.photo,
                    email: data.email,
                });
            });
    }, []);

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.avatarSection}>
                    <Avatar.Image
                        source={{
                            uri: logedInUser.userPhoto,
                            width: 150,
                            height: 150,
                        }}
                        size={spacing.mega + 30}
                    />
                    <Title style={styles.usernName}>
                        {logedInUser.username}
                    </Title>
                    <Caption style={styles.userLocation}>
                        San Francisco, CA
                    </Caption>
                </View>
                <View style={styles.userDetails}>
                    <ContactField
                        label="Username"
                        value={logedInUser.username}
                    />
                    <ContactField label="Email" value={logedInUser.email} />
                    <ContactField label="Phone" value="+880175000250" />
                    <ContactField label="Date of birth" value="March 27,1990" />
                    <ContactField label="Address" value="Celina, Delaware" />
                    <ContactField
                        label="Account"
                        value="Gold"
                        image={require("../../assets/images/gold.png")}
                    />
                </View>
                <AppButton
                    text="Sign out"
                    style={{
                        backgroundColor: colors.white,
                        color: colors.dark,
                        fontWeight: "700",
                    }}
                    onPress={() => logOut()}
                />
            </View>
        </ScrollView>
    );
};

export default UserProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: spacing.height,
        backgroundColor: colors.dark,
        justifyContent: "center",
    },
    avatarSection: {
        alignItems: "center",
        paddingTop: spacing.large,
    },
    usernName: {
        fontFamily: "bold",
        color: colors.white,
    },
    userLocation: {
        color: colors.grayFont,
        fontSize: spacing.body,
    },
});
