import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";
import { GROUP_COLLECTION } from "./storage.config";
import { groupsGetAll } from "./groupsGetAll";

export async function groupCreate(newGroup: string) {
    try {
        const storageGroups = await groupsGetAll();

        const groupAlreadyExists = await storageGroups.includes(newGroup);

        if (groupAlreadyExists) {
            throw new AppError('Jã existe um grupo cadastrado com esse nome.');
        }

        const storage = JSON.stringify([...storageGroups, newGroup]);
        await AsyncStorage.setItem(GROUP_COLLECTION, storage);

    } catch (err) {
        throw err;
    }
}