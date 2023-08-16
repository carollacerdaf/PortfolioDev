import { useState } from "react";
import { FlatList, Alert } from "react-native";

import { Header } from "@components/Header";
import { AddTodo } from "@components/AddTodo";

import { Container } from "./styles";
import { TodoCard } from "@components/TodoCard";
import { EmptyList } from "@components/EmptyList";
import { CountTodoCard } from "@components/CountTodoCard";

export function Todo() {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState<string[]>([]);
    const [checkbox, setCheckbox] = useState(false);
    const [checkedTodos, setCheckedTodos] = useState<string[]>([]);

    let count = 0;
    function handleAddTodo() {
        if (todos.includes(todo)) {
            return Alert.alert("Tarefa existe", "Já existe essa tarefa na lista.")
        }
        setCheckbox(false);
        setTodos(prevState => [...prevState, todo])
    }

    function hadleRemoveTodo(text: string) {
        setTodos(prevState => prevState.filter(todo => todo !== text));
    }

    function handleCheckbox(text: string) {
        setCheckbox(!checkbox);

        if (checkbox)
            setCheckedTodos(prevState => [...prevState, text]);
    }

    return (
        <Container>
            <Header />
            <AddTodo
                onChangeText={setTodo}
                value={todo}
                onPress={handleAddTodo} />
            <CountTodoCard added={todos.length} checked={checkedTodos.length} />
            <FlatList
                data={todos}
                keyExtractor={item => item}
                renderItem={({ item }) =>
                    <TodoCard
                        key={item}
                        title={item}
                        onRemove={() => hadleRemoveTodo(item)}
                        isChecked={checkbox}
                        onCheck={() => handleCheckbox(item)}
                    />
                }
                ListEmptyComponent={<EmptyList />}
            />
        </Container>
    );
}