import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Check, Trash } from 'phosphor-react-native';

type Props = {
    todo: string;
    checkTodo: () => boolean;
}

export function ToDo({ todo, checkTodo }: Props) {
    let check = false;
    if (checkTodo()) { check = true };
    return (
        <View style={styles.todoContainer}>
            <View style={styles.checkTodo}>
                <TouchableOpacity onPress={checkTodo}>
                    <View style={[{
                        height: 24,
                        width: 24,
                        borderRadius: 12,
                        borderWidth: 2,
                        borderColor: '#4EA8DE',
                        alignItems: 'center',
                        justifyContent: 'center',
                    },]}>
                        {
                            check ?
                                <View style={{
                                    borderRadius: 6,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <Check color="#F2F2F2" size={8} />
                                </View>
                                : null
                        }
                    </View>
                </TouchableOpacity>
                <Text style={styles.todoItem}>{todo}</Text>
            </View>
            <TouchableOpacity>
                <Trash color="#808080" />
            </TouchableOpacity>
        </View>
    )
}