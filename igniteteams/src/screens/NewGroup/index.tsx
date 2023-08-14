import { Header } from "@components/Header";
import { useNavigation } from '@react-navigation/native';

import { Container, Content, Icon } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useState } from "react";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";
import { Alert } from "react-native";

export function NewGroup() {
    const [group, setGroup] = useState('');
    const navigation = useNavigation();

    async function handleNew() {
        try {
            if (group.trim().length === 0) {
                return Alert.alert('Novo Grupo', 'Informe o nome da turma')
            }
            await groupCreate(group)
            navigation.navigate('players', { group });
        } catch (err) {
            if (err instanceof AppError) {
                Alert.alert('Novo Grupo', err.message);
            } else {
                Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo');
                console.error(err);
            }

        }
    }
    return (
        <Container>
            <Header showBackButton />
            <Content>
                <Icon />
                <Highlight title="Nome da turma" subtitle="adicione a galera e separe os times" />
                <Input
                    placeholder="Nome da turma"
                    onChangeText={setGroup}
                />
                <Button
                    title="Criar"
                    style={{ marginTop: 20 }}
                    onPress={handleNew}
                />
            </Content>
        </Container>
    );
}