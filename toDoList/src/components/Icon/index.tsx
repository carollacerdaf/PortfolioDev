import { Rocket } from "phosphor-react-native";
import React from "react";
import { View, Text } from "react-native"
import { styles } from "./styles";

export function Icon() {
    return (
        <View>
            <Rocket color="#4EA8DE" size={24} />
            <View style={styles.rocketGo}>
                <Text style={styles.rocketShape}>|</Text>
                <Text style={{
                    fontSize: 9,
                    color: '#5E60CE',
                    fontWeight: 'bold',
                }}>|</Text>
                <Text style={styles.rocketShape}>|</Text>
            </View>
        </View>
    );
}