import { View,Text, SafeAreaView} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "./screens/HomeScreen";

import AboutScreen from "./screens/AboutScreen";

import ContactScreen from "./screens/ContactScreen";

const DrawerBrowser = createDrawerNavigator();

const App = () => {

    return(
        <NavigationContainer>
            <DrawerBrowser.Navigator>
               <DrawerBrowser.Screen name='Home' component={HomeScreen}/>
                <DrawerBrowser.Screen name='Contact' component={ContactScreen}/>
                <DrawerBrowser.Screen name='About' component={AboutScreen}/>
            </DrawerBrowser.Navigator>

        </NavigationContainer>
    )

}

export default App;