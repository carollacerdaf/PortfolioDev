import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131016',
        padding: 24,
        fontWeight: 'bold'
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 40,
        marginBottom: 32,
    },
    input: {
        flex: 1,
        borderRadius: 6,
        padding: 16,
        backgroundColor: '#262626',
        borderColor: '0D0D0D',
        borderWidth: 1,
        fontSize: 16,
        color: '#808080',
        marginRight: 4,
        height: 54,
    },
    button: {
        backgroundColor: '#1E6F9F',
        width: 52,
        height: 52,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
})