import React from 'react';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import TwitterHome from './components/TwitterHome';
import TweetDetail from './components/TweetDetail';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TwitterTab = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: '#1DA1F2',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: 'white',
        height: 60,
      },
    }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home-outline';

          const focusedRoute = getFocusedRouteNameFromRoute(route);
          if (focusedRoute === 'Home') {
            color = 'cyan';
          }
        } else if (route.name === 'Search') {
          iconName = 'search-outline';
        } else if (route.name === 'Notification') {
          iconName = 'notifications-outline';
        } else if (route.name === 'Message') {
          iconName = 'chatbox-outline';
        }

        return <Icon name={iconName} color={color} size={size} />;
      },
    })}
  >
    <Tab.Screen name="Home" component={TwitterHome} />
    <Tab.Screen name="Search" component={TwitterHome} />
    <Tab.Screen name="Notification" component={TwitterHome} />
    <Tab.Screen name="Message" component={TwitterHome} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="." component={TwitterTab} options={{ headerShown: false }} />
        <Stack.Screen name="TweetDetail" component={TweetDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
