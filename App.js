import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageExpense from '../expense-tracker/screens/ManageExpense';
import RecentExpenses from '../expense-tracker/screens/RecentExpenses';
import AllExpenses from '../expense-tracker/screens/AllExpenses';
import { GlobalStyles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import IconButton from './components/UI/IconButton';
import ExpensesContextProvider from './store/expense-context';
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => {
        return {
          headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
          headerTintColor: 'white',
          tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
          tabBarActiveTintColor: GlobalStyles.colors.accent500,
          headerRight: ({ tintColor }) => {
            return (
              <IconButton
                icon="add"
                color={tintColor}
                size={24}
                onPress={() => {
                  navigation.navigate('ManageExpense');
                }}
              />
            );
          },
        };
      }}>
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="hourglass" color={color} size={size} />;
          },
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All Expenses',
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="calendar" color={color} size={size} />;
          },
        }}
      />
    </BottomTabs.Navigator>
  );
}
export default function App() {
  return (
    <>
      <ExpensesContextProvider>
        <StatusBar style="light" />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTintColor: 'white',
            }}>
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpensesOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManageExpense"
              component={ManageExpense}
              options={{
                presentation: 'modal',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
