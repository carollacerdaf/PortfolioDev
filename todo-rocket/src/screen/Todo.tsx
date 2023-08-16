import { useState } from "react";
import { FlatList } from "react-native";

import { Header } from "@components/Header";
import { AddTodo } from "@components/AddTodo";

import { Container } from "./styles";
import { TodoCard } from "@components/TodoCard";
import { EmptyList } from "@components/EmptyList";
import { CountTodoCard } from "@components/CountTodoCard";

export function Todo() {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);
    return (
        <Container>
            <Header />
            <AddTodo />
            <CountTodoCard number={0}/>
            <FlatList 
                data={todos}
                keyExtractor={item => item}
                renderItem={({item}) => 
                <TodoCard title={item}/>
            }
            ListEmptyComponent={<EmptyList />}
            />
        </Container>
    );
}