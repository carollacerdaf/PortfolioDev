import { View, Text } from "react-native";
import { styles } from "./styles";
import { NumberOfTodos } from "../NumberOfTodos";

type Props = {
    countTodo: number;
}

export function Count({countTodo}: Props) {
    return (
        <View style={styles.countContainer}>
            <View style={styles.countingSection}>
                <Text style={styles.countCreated}>Criadas</Text>
                    <NumberOfTodos countTodo={countTodo}/>
            </View>
            <View style={styles.countingSection}>
                <Text style={styles.countFinished}>Concluídas</Text>
                <NumberOfTodos countTodo={countTodo}/>
            </View>
        </View>
    );
}