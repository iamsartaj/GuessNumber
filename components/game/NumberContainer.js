import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Colors from '../../constants/colors';

export const NumberContainer = ({ children }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

const dWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.primary1,
        padding: dWidth < 380 ? 12 : 24,
        borderRadius: 8,
        margin: dWidth < 380 ? 12 : 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: Colors.primary1,
        fontSize: dWidth < 380 ? 26 : 36,
        fontFamily: 'open-sans-bold',
    }
})