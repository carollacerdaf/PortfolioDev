import { useEffect, useState, useRef } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Alert, FlatList, TextInput } from 'react-native'
import { Header } from "@components/Header";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { AppError } from '@utils/AppError';
import { playerAddByGroup } from '@storage/player/playerAddByGroup';
import { playersGetByGroupAndTeam } from '@storage/player/playerGetByGroupAndTeam';
import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO';
import { playerRemoveByGroup } from '@storage/player/playerRemoveByGroup';
import { groupRemoveByName } from '@storage/group/groupRemoveByName';
import { Loading } from '@components/Loading';

type RouteParams = {
    group: string;
}

export function Players() {
    const [isLoading, setIsLoading] = useState(true);
    const [newPlayerName, setNewPlayerName] = useState('');
    const [team, setTeam] = useState('');
    const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

    const navigation = useNavigation();
    const route = useRoute();
    const { group } = route.params as RouteParams;

    const newPlayerNameInputRef = useRef<TextInput>(null);

    async function handleAddPlayer() {
        if (newPlayerName.trim().length === 0) {
            return Alert.alert('Nova pessoa', 'Informe o nome da pessoa');
        }

        const newPlayer = {
            name: newPlayerName,
            team,
        }

        try {
            await playerAddByGroup(newPlayer, group);
            newPlayerNameInputRef.current?.blur();
            setNewPlayerName('');
            fetchPlayersByTeam();
        } catch (err) {
            if (err instanceof AppError) {
                Alert.alert('Nova Pessoa', err.message);
            } else {
                console.log(err);
                Alert.alert('Nova Pessoa', 'Não foi possível adicionar.');
            }
        }
    }

    async function fetchPlayersByTeam() {
        try {
            setIsLoading(true);
            const playersByTeam = await playersGetByGroupAndTeam(group, team);
            setPlayers(playersByTeam);

        } catch (err) {
            console.log(err);
            Alert.alert('Pessoas', 'Não foi possível carregar as pessoas do time selecionado.');
        }finally {
            setIsLoading(false);
        }
    }

    async function handlePlayerRemove(playerName: string) {
        try {
            await playerRemoveByGroup(playerName, group);
            fetchPlayersByTeam();
        } catch (err) {

            console.log(err);
            Alert.alert('Pessoa', 'Não foi possível remover a pessoa.');
        }
    }

    async function groupRemove() {
        try {
            await groupRemoveByName(group);
            navigation.navigate('groups');
        } catch (err) {
            console.log(err)
            Alert.alert('Remover Grupo', 'Não foi possível remover o grupo.');
        }
    }

    async function handleGroupRemove() {
        Alert.alert('Remover', 'Deseja remover o grupo?', [
            { text: 'Não', style: 'cancel' },
            { text: 'Sim', onPress: () => groupRemove() }
        ])
    }

    useEffect(() => {
        fetchPlayersByTeam();
    }, [team])
    return (
        <Container>
            <Header showBackButton />

            <Highlight
                title={group}
                subtitle="adicione a galera e separe os times"
            />
            <Form>
                <Input
                    inputRef={newPlayerNameInputRef}
                    placeholder="Nome da pessoa"
                    autoCorrect={false}
                    onChangeText={setNewPlayerName}
                    value={newPlayerName}
                    onSubmitEditing={handleAddPlayer}
                    returnKeyType='done'
                />
                <ButtonIcon icon="add" onPress={handleAddPlayer} />
            </Form>
            <HeaderList>
                <FlatList
                    data={['Time A', 'Time B']}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Filter
                            title={item}
                            isActive={item === team}
                            onPress={() => setTeam(item)}
                        />
                    )}
                    horizontal
                />
                <NumberOfPlayers>{players.length}</NumberOfPlayers>
            </HeaderList>

            {isLoading ? <Loading /> :
                <FlatList
                    data={players}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => (
                        <PlayerCard
                            name={item.name}
                            onRemove={() => handlePlayerRemove(item.name)}
                        />
                    )}
                    ListEmptyComponent={() =>
                        <ListEmpty
                            message='Não há pessoas nesse time.'
                        />
                    }
                    showsVerticalScrollIndicator
                    contentContainerStyle={[
                        { paddingBottom: 100 },
                        players.length === 0 && { flex: 1 }
                    ]}
                />
            }
            <Button
                title='Remover Turma'
                type='SECONDARY'
                onPress={handleGroupRemove}
            />

        </Container>
    );
}