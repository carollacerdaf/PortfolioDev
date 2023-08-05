import { View, Text } from "react-native";
import { Rocket } from "phosphor-react-native";
import { styles } from "./styles";
import { Icon } from "../Icon";

export function Header() {
    return (
        <View style={styles.header}>
            <Icon />
            <Text style={{ color: '#4EA8DE', fontSize: 24, marginLeft: 12 }}>
                to
            </Text>
            <Text style={{ color: '#5E60CE', fontSize: 24 }}>
                do
            </Text>
        </View>
    );
}