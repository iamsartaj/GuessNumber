import { View, Text, StyleSheet } from "react-native";

function GuessLogItems({ roundNumber, guess }) {
    return (
    <View style={styles.listItem}>
        <Text style={styles.itemText}>#{roundNumber}</Text>
        <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
    );
}

export default GuessLogItems;

const styles = StyleSheet.create({
    listItem: {
        borderColor: '#e9e9e9',
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: '#3b021f',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 4,
        shadowOpacity: 0.25,
    },
    itemText: {
        fontFamily: 'open-sans',
    }
})