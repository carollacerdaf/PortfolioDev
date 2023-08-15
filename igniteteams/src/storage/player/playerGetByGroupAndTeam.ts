import AsyncStorage from "@react-native-async-storage/async-storage";
import { PlayerStorageDTO } from './PlayerStorageDTO'
import { PLAYER_COLLECTION } from "@storage/storage.config";
import { playersGetByGroup } from "./playersGetByGroup";

export async function playersGetByGroupAndTeam(group: string, team: string) {
    try {
        const storage = await playersGetByGroup(group);
        const players = storage.filter(player => player.team === team);
        return players;

    } catch (err) {
        throw err;
    }
}