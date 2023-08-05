import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    todoItem: {
        color: '#F2F2F2',
        fontSize: 14,
        marginLeft: 8,
    },
    todoContainer: {
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#262626',
        borderColor: '#333333',
        borderWidth: 1,
        padding: 12,
        marginBottom: 8,
    },
    checkTodo: {
        flexDirection: 'row',
    }
});