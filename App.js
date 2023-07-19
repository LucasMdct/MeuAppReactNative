import { View,Text, SafeAreaView} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from "./screens/HomeScreen";

import AboutScreen from "./screens/AboutScreen";

import ContactScreen from "./screens/ContactScreen";

const TabBrowser = createBottomTabNavigator();

const App = () => {

    return(
        <NavigationContainer>
            <TabBrowser.Navigator>
               <TabBrowser.Screen name='Home' component={HomeScreen}
                 options={{
                    tabBarIcon: ({ color, size }) => {
                      return <MaterialCommunityIcons name='account-box-outline' size={size} color={color} />
                    }
                  }}/>
                <TabBrowser.Screen name='Contact' component={ContactScreen}
                  options={{
                    tabBarIcon: ({ color, size }) => {
                      return <MaterialCommunityIcons name='contacts' size={size} color={color} />
                    }
                  }}/>
                <TabBrowser.Screen name='About' component={AboutScreen}
                  options={{
                    tabBarIcon: ({ color, size }) => {
                      return <MaterialCommunityIcons name='information-variant' size={size} color={color} />
                    }
                  }}/>
            </TabBrowser.Navigator>

        </NavigationContainer>
    )

}

export default App;