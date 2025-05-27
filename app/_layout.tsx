import '../global.css';
import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { Text, Platform } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import ThemeWrapper from "~/components/app/theme-wrapper";

export default function Layout() {
  return (
    <ThemeWrapper>
      <Tabs
        screenOptions={{
          tabBarShowLabel: true,
          tabBarStyle: {
            backgroundColor: Platform.OS === 'ios' ? 'transparent' : 'rgba(255, 255, 255, 0.9)', 
            borderTopWidth: 0,
            position: 'absolute',
            borderTopEndRadius: 30,
            borderTopStartRadius: 30,
            paddingBottom: 12,
            paddingTop: 10,
            height: 70,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: 0.3,
            shadowRadius: 10,
            elevation: 12,
            zIndex: 100,
          },
          tabBarBackground: () => (
            Platform.OS === 'ios' ? (
              <BlurView
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                  overflow: 'hidden',
                }}
                blurType="light" // or "dark", "xlight", "prominent", etc.
                blurAmount={10}
                reducedTransparencyFallbackColor="rgba(255, 255, 255, 0.9)"
              />
            ) : null
          ),
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
            marginTop: 4,
          },
          tabBarActiveTintColor: '#0070E9', 
          tabBarInactiveTintColor: '#6272A4', 
          headerShown: false,
          tabBarHideOnKeyboard: true,
        }}
      >
        {/* Your existing tab screens remain the same */}
        <Tabs.Screen
          name="home/index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size, focused }) => (
              <MaterialIcons name="home" size={26} color={color} />
            ),
            tabBarLabel: ({ focused, color }) => focused ? (
              <Text style={{ 
                color: color,
                fontSize: 11,
                fontWeight: '600',
                marginTop: 2,
              }}>
                Home
              </Text>
            ) : undefined,
          }}
        />
        <Tabs.Screen
          name="search/index"
          options={{
            title: 'Search',
            tabBarIcon: ({ color, size, focused }) => (
              <MaterialIcons name="search" size={26} color={color} />
            ),
            tabBarLabel: ({ focused, color }) => focused ? (
              <Text style={{ 
                color: color,
                fontSize: 11,
                fontWeight: '600',
                marginTop: 2,
              }}>
                Search
              </Text>
            ) : undefined,
          }}
        />
        <Tabs.Screen
          name="notif/index"
          options={{
            title: 'Calendar',
            tabBarIcon: ({ color, size, focused }) => (
              <MaterialIcons name="calendar-today" size={26} color={color} />
            ),
            tabBarLabel: ({ focused, color }) => focused ? (
              <Text style={{ 
                color: color,
                fontSize: 11,
                fontWeight: '600',
                marginTop: 2,
              }}>
                Calendar
              </Text>
            ) : undefined,
          }}
        />
        <Tabs.Screen
          name="likes/index"
          options={{
            title: 'Heart',
            tabBarIcon: ({ color, size, focused }) => (
              <MaterialIcons name="favorite-border" size={26} color={color} />
            ),
            tabBarLabel: ({ focused, color }) => focused ? (
              <Text style={{ 
                color: color,
                fontSize: 11,
                fontWeight: '600',
                marginTop: 2,
              }}>
                Heart
              </Text>
            ) : undefined,
          }}
        />
        <Tabs.Screen
          name="profile/index"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, size, focused }) => (
              <MaterialIcons 
                name={focused ? "person" : "person-outline"} 
                size={26} 
                color={color} 
              />
            ),
            tabBarLabel: ({ focused, color }) => focused ? (
              <Text style={{ 
                color: color,
                fontSize: 11,
                fontWeight: '600',
                marginTop: 2,
              }}>
                Profile
              </Text>
            ) : undefined,
          }}
        />
      </Tabs>
    </ThemeWrapper>
  );
}