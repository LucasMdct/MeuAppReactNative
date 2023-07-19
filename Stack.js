import { View,Text, SafeAreaView} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";

import AboutScreen from "./screens/AboutScreen";

import ContactScreen from "./screens/ContactScreen";

const StackBrowser = createStackNavigator();

const App = () => {

    return(
        <NavigationContainer>
            <StackBrowser.Navigator>
                <StackBrowser.Screen name='Home' component={HomeScreen}/>
                <StackBrowser.Screen name='Contact' component={ContactScreen}/>
                <StackBrowser.Screen name='About' component={AboutScreen}/>
            </StackBrowser.Navigator>

        </NavigationContainer>
    )

}

export default App;