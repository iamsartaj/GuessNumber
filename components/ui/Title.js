import { StyleSheet, Text } from "react-native"
import Colors from "../../constants/colors";


const Title = ({ children }) => {
    return (
        <Text style={styles.title}>
            {children}
        </Text>
    )
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: Colors.primary1,
        textAlign: 'center',
        marginTop: 40,
        padding: 12
    }
})