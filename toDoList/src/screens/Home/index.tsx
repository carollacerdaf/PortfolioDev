import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./styles";
import { ToDo } from "../../components/ToDo";
import { Count } from "../../components/Count";
import { PlusCircle, Rocket } from 'phosphor-react-native';
import { Header } from "../../components/Header";

export function Home() {
    const todo = ['ok', 'deu certo']
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor='#808080' />
                <TouchableOpacity style={styles.button}>
                    <PlusCircle color="#F2F2F2" />
                </TouchableOpacity>
            </View>
            <Count />
            <FlatList
                data={todo}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <ToDo
                        key={item}
                        todo={item}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text>Emptyyy</Text>
                )}
            />
        </View>
    )
}