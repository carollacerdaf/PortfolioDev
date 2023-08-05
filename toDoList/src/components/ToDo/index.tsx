import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Circle, Trash } from 'phosphor-react-native';

type Props = {
    todo: string;
}

export function ToDo({ todo }: Props) {
    return (
        <View style={styles.todoContainer}>
            <View style={styles.checkTodo}>
                <Circle color="#4EA8DE" />
                <Text style={styles.todoItem}>{todo}</Text>
            </View>
            <TouchableOpacity>
                <Trash color="#808080" />
            </TouchableOpacity>
        </View>
    )
}