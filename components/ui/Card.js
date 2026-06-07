import { View, StyleSheet } from 'react-native';


const Card = ({ children }) => {
    return (
        <View style={styles.card}>
            {children}
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
    card: {
        padding: 26,
        marginTop: 0,
        marginHorizontal: 24,
        borderRadius: 3,
        backgroundColor: '#34363758',
        elevation: 1,
        shadowColor: 'grey',
        shadowOpacity: 0.25,
        alignItems: 'center'
    }
})