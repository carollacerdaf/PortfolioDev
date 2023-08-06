import { View, Text } from "react-native";
import { styles } from "./styles";

type Props = {
    countTodo: number;
}

export function NumberOfTodos({ countTodo }: Props) {
    return (
        <View style={styles.countingContainer}>
            <Text style={styles.counting}>{countTodo}</Text>
        </View>
    );
}