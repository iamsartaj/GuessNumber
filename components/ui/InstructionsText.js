import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const InstructionsText = ({ children }) => {
    return (
        <Text style={styles.instructionText}>{children}</Text>
    )
}

export default InstructionsText;

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: 'open-sans',
        color: Colors.primary1,
        fontSize: 20,
        marginBottom: 12,
    },
})