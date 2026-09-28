
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import type { RootStackParamList } from './types';

import {AccountDetailScreen} from '@/screens/AccountDetail';
import {AccountScreen} from '@/screens/AccountScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();
// const Tab = createBottomTabNavigator<TabParamList>();

// function Tabs() {
//     return (
//         <Tab.Navigator>
//             <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
//         </Tab.Navigator>
//     )
// }

export function RootNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} /> */}
                <Stack.Screen
                    name="Account"
                    component={AccountScreen}
                />
                <Stack.Screen
                    name="Detail"
                    component={AccountDetailScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}