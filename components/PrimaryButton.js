import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function PrimaryButton(props) {

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable 
        style={styles.buttonInnerContainer} 
        onPress={props.onPress} 
        android_ripple={{ color: Colors.primary2 }}
       >
        <Text style={styles.button}>
            {props.children}
        </Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 5,
    overflow: "hidden",
    width: 120,
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary2,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2
  },
  button: {
    color: "white",
    textAlign: "center",
  },
});
