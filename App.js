import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewsFeedApp from './components/NewsFeedApp';
import MessengerApp from './components/MessengerApp';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NewsFeed">
        <Stack.Screen
          name="NewsFeed"
          component={NewsFeedApp}
          options={{ title: 'News Feed' }}
        />
        <Stack.Screen
          name="Messenger"
          component={MessengerApp}
          options={{ title: 'Messenger' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}