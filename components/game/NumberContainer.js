import { StyleSheet, View, Text } from "react-native";
import Colors from "../../constants/colors";

const NumberContainer = ({children}) => {
  return (
    <View style={styles.numberContainer}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

export default NumberContainer;

const styles = StyleSheet.create({
    numberContainer:{
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: 24, 
        margin: 24,
        borderRadius: 8,
        alignItem: "center",
        justifyContent: "center"
    },
    numberText: {
        color: Colors.accent500,
        fontSize: 36,
        fontWeight: "bold"
    }
})