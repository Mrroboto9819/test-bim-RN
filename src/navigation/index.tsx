import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from '@/screens/HomeScreen';
import { DetailScreen } from '@/screens/DetailScreen';

import type { RootStackParamList, TabParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

function Tabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        </Tab.Navigator>
    )
}

export function RootNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
                <Stack.Screen
                    name="Detail"
                    component={DetailScreen}
                    options={({ route }) => ({ title: route.params.title })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}