import { View, Text } from "react-native";
import { styles } from "./styles";
import { NumberOfTodos } from "../NumberOfTodos";

export function Count() {
    return (
        <View style={styles.countContainer}>
            <View style={styles.countingSection}>
                <Text style={styles.countCreated}>Criadas</Text>
                    <NumberOfTodos />
            </View>
            <View style={styles.countingSection}>
                <Text style={styles.countFinished}>Concluídas</Text>
                <NumberOfTodos />
            </View>
        </View>
    );
}