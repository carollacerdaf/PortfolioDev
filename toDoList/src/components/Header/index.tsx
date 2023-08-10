import { View, Text, Image } from "react-native";
import { styles } from "./styles";

export function Header() {
    return (
        <View style={styles.header}>
            <Image
                source={require('../../../assets/rocket.png')}
            />
            <Text style={[{ color: '#4EA8DE', marginLeft: 12 }, styles.title]}>
                to
            </Text>
            <Text style={[{ color: '#5E60CE' }, styles.title]}>
                do
            </Text>
        </View>
    );
}