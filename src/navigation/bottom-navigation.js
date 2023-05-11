import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform, StyleSheet, Text, View } from 'react-native';
import HomeSvg from "../../assets/home.svg";
import { Theme } from "../utils/theme";
import HomeScreen from "../screens/home";
import Discover from "../../assets/discover.svg";
import Activity from "../../assets/activity.svg";
import Bookmark from "../../assets/bookMark.svg";
import Profile from "../../assets/profile.svg";
import DiscoverScreen from "../screens/discover";
import ActivityScreen from "../screens/Activity";
import BookmarkScreen from "../screens/bookmark";
import ProfileScreen from "../screens/profile";
import { STRINGS } from "../utils/string";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    return (

        <Tab.Navigator
            initialRouteName="HomeStack"
            screenOptions={{
                headerShown: false,
                tabBarActiveBackgroundColor: Theme.primary,
                tabBarInactiveBackgroundColor: Theme.primary,
                tabBarInactiveTintColor: "gray",
                tabBarActiveTintColor: "#FFFFFF",
                tabBarShowLabel: false,
                unmountOnBlur: true,
                tabBarHideOnKeyboard: Platform.OS == 'android' ? true : false,
                tabBarItemStyle: {
                    height: Platform.OS === "android" ? 83 : 70,
                    paddingBottom: Platform.OS === "android" ? 0 : 10,

                },
                tabBarStyle: {
                    height: Platform.OS === "android" ? 83 : 70,
                },

            }} >
            <Tab.Screen name={STRINGS.home} component={HomeScreen}
                options={({ }) => ({
                    tabBarIcon: ({ }) => <View style={styles.container}>
                        <HomeSvg width={21} height={21} />
                        <Text style={styles.fonStyleLabel}>
                            {STRINGS.home}
                        </Text>
                    </View>
                })}
            />
            <Tab.Screen name={STRINGS.discover} component={DiscoverScreen}
                options={({ }) => ({
                    tabBarIcon: ({ }) => <View style={styles.container}>
                        <Discover width={21} height={21} />
                        <Text style={styles.fonStyleLabel}>
                            {STRINGS.discover}
                        </Text>
                    </View>
                })} />
            <Tab.Screen name={STRINGS.activity} component={ActivityScreen}
                options={({ }) => ({
                    tabBarIcon: ({ }) => <View style={styles.container}>
                        <Activity width={21} height={21} />
                        <Text style={styles.fonStyleLabel}>
                            {STRINGS.activity}
                        </Text>
                    </View>
                })} />
            <Tab.Screen name={STRINGS.bookmark} component={BookmarkScreen}
                options={({ }) => ({
                    tabBarIcon: ({ }) => <View style={styles.container}>
                        <Bookmark width={21} height={21} />
                        <Text style={styles.fonStyleLabel}>
                            {STRINGS.bookmark}
                        </Text>
                    </View>
                })} />
            <Tab.Screen name={STRINGS.profile} component={ProfileScreen}
                options={({ }) => ({
                    tabBarIcon: ({ }) => <View style={styles.container}>
                        <Profile width={21} height={21} />
                        <Text style={styles.fonStyleLabel}>
                            {STRINGS.profile}
                        </Text>
                    </View>
                })} />
        </Tab.Navigator>
    )
};

export default BottomNavigation;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    fonStyleLabel: {
        fontSize: 12,
        color: Theme.white,
    }
})
