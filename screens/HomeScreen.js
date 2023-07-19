import { View, Text } from "react-native";

import { Button } from "react-native-paper";

import ContactScreen from "./ContactScreen";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {

    const navigation = useNavigation();

    return (
        <View>
            <Text>
                Home Screen
            </Text>
            <Button onPress={() => {navigation.navigate('Contact')}}> Ir Para Contato </Button>

            <Button onPress={() => {navigation.navigate('About')}}>Ir Para Sobre</Button>
        </View>
    )
}


export default HomeScreen;