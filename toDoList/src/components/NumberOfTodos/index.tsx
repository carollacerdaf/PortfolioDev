import { View, Text } from "react-native";
import { styles } from "./styles";

export function NumberOfTodos() {
    return (
        <View style={styles.countingContainer}>
            <Text style={styles.counting}>5</Text>
        </View>
    );
}