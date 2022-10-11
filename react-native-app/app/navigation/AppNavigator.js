import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Music from "../screens/Music";
import Player from "../screens/Player";
import FavoriteMusic from "../screens/FavoriteMusic";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Music" component={Music} />
      <Tab.Screen name="Player" component={Player} />
      <Tab.Screen name="Favorite" component={FavoriteMusic} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
