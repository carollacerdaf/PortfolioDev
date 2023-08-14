import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Check, Trash } from 'phosphor-react-native';

type Props = {
    todo: any;
    onRemove: () => void
    onCheck: () => void
}

export function ToDo({ todo, onRemove, onCheck }: Props) {
    return (
        <View style={styles.todoContainer}>
            <View style={styles.checkTodo}>
                <TouchableOpacity onPress={onCheck}>
                    <View style={[
                        styles.radioButton
                        , (todo.isChecked) ? styles.checked : null]}>
                        {
                            todo.isChecked ?
                                <View style={styles.checkSign}>
                                    <Check color="#F2F2F2" size={8} />
                                </View>
                                : null
                        }
                    </View>
                </TouchableOpacity>
                <Text style={[styles.todoItem, (todo.isChecked) ? styles.checkedTodo : null]}>{todo.todo}</Text>
            </View>
            <TouchableOpacity onPress={onRemove}>
                <Trash color="#808080" />
            </TouchableOpacity>
        </View>
    )
}