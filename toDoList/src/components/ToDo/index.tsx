import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Check, Trash } from 'phosphor-react-native';

type Props = {
    todo: string;
    onRemove: () => void
}

export function ToDo({ todo, onRemove }: Props) {
    const [check, setCheck] = useState<boolean>(false);

    function handleRadioButton() {
        if (check) {
            setCheck(false);
        } else {
            setCheck(true);
        }
    }

    return (
        <View style={styles.todoContainer}>
            <View style={styles.checkTodo}>
                <TouchableOpacity onPress={handleRadioButton}>
                    <View style={[
                        styles.radioButton
                        , (check) ? styles.checked : null]}>
                        {
                            check ?
                                <View style={styles.checkSign}>
                                    <Check color="#F2F2F2" size={8} />
                                </View>
                                : null
                        }
                    </View>
                </TouchableOpacity>
                <Text style={[styles.todoItem, (check)? styles.checkedTodo : null]}>{todo}</Text>
            </View>
            <TouchableOpacity onPress={onRemove}>
                <Trash color="#808080" />
            </TouchableOpacity>
        </View>
    )
}