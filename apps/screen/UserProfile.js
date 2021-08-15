import React, { useContext } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Avatar, Caption, Title } from "react-native-paper";
import AppButton from "../../components/AppButton";
import ContactField from "../../components/ContactField";
import { colors, spacing } from "../../theme";
import { AuthContext } from "../Navigation/AuthProvider";

const UserProfile = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.avatarSection}>
                    <Avatar.Image
                        source={require("../../assets/images/avatar.png")}
                        size={spacing.mega + 30}
                    />
                    <Title style={styles.usernName}>Tanya Edwards</Title>
                    <Caption style={styles.userLocation}>
                        San Francisco, CA
                    </Caption>
                </View>
                <View style={styles.userDetails}>
                    <ContactField label="Username" value="Tanya69" />
                    <ContactField label="Email" value={user.email} />
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
        backgroundColor: colors.dark,
        paddingTop: spacing.large + 10,
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
