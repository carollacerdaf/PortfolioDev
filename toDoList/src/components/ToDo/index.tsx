import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Check, Trash } from 'phosphor-react-native';

type Props = {
    todo: string;
    onRemove: () => void
    onCheck: () => boolean
}

export function ToDo({ todo, onRemove, onCheck }: Props) {
    console.log(onCheck)
    return (
        <View style={styles.todoContainer}>
            <View style={styles.checkTodo}>
                <TouchableOpacity onPress={onCheck}>
                    <View style={[
                        styles.radioButton
                        , (onCheck()) ? styles.checked : null]}>
                        {
                            onCheck() ?
                                <View style={styles.checkSign}>
                                    <Check color="#F2F2F2" size={8} />
                                </View>
                                : null
                        }
                    </View>
                </TouchableOpacity>
                <Text style={[styles.todoItem, (onCheck())? styles.checkedTodo : null]}>{todo}</Text>
            </View>
            <TouchableOpacity onPress={onRemove}>
                <Trash color="#808080" />
            </TouchableOpacity>
        </View>
    )
}