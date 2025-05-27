
import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { Text, Platform } from 'react-native';
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
          name="home"
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
          name="reserve"
          options={{
            title: 'Reserve',
            tabBarIcon: ({ color, size, focused }) => (
              <MaterialIcons name="directions-car" size={26} color={color} />
            ),
            tabBarLabel: ({ focused, color }) => focused ? (
              <Text style={{ 
                color: color,
                fontSize: 11,
                fontWeight: '600',
                marginTop: 2,
              }}>
                Reserve
              </Text>
            ) : undefined,
          }}
        />
        <Tabs.Screen
          name="notif"
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
          name="likes"
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
          name="profile"
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