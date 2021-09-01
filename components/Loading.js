import React from "react";
import { ActivityIndicator } from "react-native";
import { colors } from "../theme";

const Loading = () => {
    return (
        <ActivityIndicator
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
            size="large"
            color={colors.green}
        />
    );
};

export default Loading;
