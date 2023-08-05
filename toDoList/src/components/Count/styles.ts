import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    countContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginTop: 32,
    },
    countCreated: {
        color: '#4EA8DE',
        fontSize: 14,
        fontWeight: 'bold'
    },
    countFinished: {
        color: '#8284FA',
        fontSize: 14,
        fontWeight: 'bold'
    },
    countingContainer: {
        backgroundColor: '#333333',
        borderRadius: 999,
        width: 24,
        height: 19,
        alignItems: 'center',
        justifyContent: 'center'
    },
    counting: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#D9D9D9'
    },
    countingSection: {
        flexDirection: 'row'
    }
});