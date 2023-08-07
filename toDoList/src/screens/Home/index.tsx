import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./styles";
import { ToDo } from "../../components/ToDo";
import { Count } from "../../components/Count";
import { ClipboardText, PlusCircle, Rocket } from 'phosphor-react-native';
import { Header } from "../../components/Header";
import { useEffect, useState } from "react";

export function Home() {
    const [todos, setTodos] = useState<string[]>([]);
    const [todo, setTodo] = useState('');
    const [check, setCheck] = useState(false);

    function handleRadioButton() {
        setCheck(true)
        return check;
    }
    function handleAddTodo() {
        setTodos(prevState => [...prevState, todo])
        setTodo('')
    }

    function deleteTodo(todoAdd: string) {
        setTodos(prevState => prevState.filter(todo => todo !== todoAdd))
    }

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor='#808080'
                    onChangeText={setTodo}
                    value={todo}
                />
                <TouchableOpacity style={styles.button} onPress={handleAddTodo}>
                    <PlusCircle color="#F2F2F2" />
                </TouchableOpacity>
            </View>
            <Count countTodo={todos.length} />
            <FlatList
                data={todos}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <ToDo
                        key={item}
                        todo={item}
                        onRemove={() => deleteTodo(item)}
                        onCheck={() => handleRadioButton()}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <View style={{ alignItems: 'center' }}>
                        <View style={styles.emptyListIcon}>
                            <ClipboardText color="#808080" size={40} />
                        </View>
                        <Text style={styles.emptyListMessageBold}>
                            Você ainda não tem tarefas cadastradas
                        </Text>
                        <Text style={styles.emptyListMessage}>
                            Crie tarefas e organize seus itens a fazer</Text>
                    </View>
                )}
            />
        </View>
    )
}