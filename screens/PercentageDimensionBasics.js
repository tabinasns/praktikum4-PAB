import React from "react";
import { View } from "react-native";

const PercentageDimensionBasics = () => {
    return (
        <View>
            <View 
                style={{
                    height: "15%",
                    backgroundColor: "powderblue"
                }}
            />
            <View 
                style={{
                    width: "66%",
                    height: "35%",
                    backgroundColor: "skyblue"
                }}
            />
            <View 
                style={{
                    width: "33%",
                    height: "50%",
                    backgroundColor: "steelblue"
                }}
            />
        </View>
    );
};

export default PercentageDimensionBasics;