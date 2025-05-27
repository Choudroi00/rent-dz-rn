import React from 'react';
import { View, Text, ScrollView, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type IconName = keyof typeof MaterialIcons.glyphMap;

const notifications: {
  id: number;
  type: string;
  title: string;
  message: string;
  time: string;
  icon: IconName;
  color: string;
}[] = [
  {
    id: 1,
    type: 'reservation',
    title: 'Reservation Confirmed',
    message: 'Your car reservation for Mercedes S500 has been confirmed',
    time: '2 hours ago',
    icon: 'check-circle',
    color: '#4CAF50'
  },
  {
    id: 2,
    type: 'reminder',
    title: 'Upcoming Return',
    message: 'Don\'t forget to return your rented car tomorrow',
    time: '5 hours ago',
    icon: 'event',
    color: '#FFA000'
  },
  {
    id: 3,
    type: 'promo',
    title: 'Special Offer',
    message: 'Get 20% off on your next rental this weekend',
    time: '1 day ago',
    icon: 'local-offer',
    color: '#E91E63'
  },
  {
    id: 4,
    type: 'system',
    title: 'Profile Updated',
    message: 'Your profile information has been successfully updated',
    time: '2 days ago',
    icon: 'person',
    color: '#2196F3'
  }
];

const NotificationPage = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="light-content" backgroundColor="#4A90E2" />
      
      {/* Header */}
      <View className="bg-blue-500 px-5 py-4 flex-col space-y-6 rounded-b-3xl">
        <View className="flex-row justify-between items-center py-4">
          <View className="flex-row items-center">
            <MaterialIcons name="notifications" size={24} color="white" />
            <Text className="text-white text-lg font-semibold ml-2">Notifications</Text>
          </View>
          <TouchableOpacity>
            <MaterialIcons name="done-all" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 px-5 mb-20" showsVerticalScrollIndicator={false}>
        <View className="mt-6">
          <View className="flex-col mb-4">
            <Text className="text-xl font-bold text-gray-800">Recent Notifications</Text>
            <View className="w-[70%] h-2 rounded-full bg-blue-500 mt-1" />
          </View>

          <View className="space-y-4">
            {notifications.map((notification) => (
              <TouchableOpacity 
                key={notification.id}
                className="bg-white rounded-2xl p-4 shadow-sm"
              >
                <View className="flex-row items-start space-x-3">
                  <View 
                    className="w-12 h-12 rounded-full items-center justify-center"
                    style={{ backgroundColor: `${notification.color}20` }}
                  >
                    <MaterialIcons 
                      name={notification.icon} 
                      size={24} 
                      color={notification.color} 
                    />
                  </View>
                  <View className="flex-1">
                    <View className="flex-row justify-between items-start">
                      <Text className="text-base font-semibold text-gray-800">
                        {notification.title}
                      </Text>
                      <Text className="text-xs text-gray-500">
                        {notification.time}
                      </Text>
                    </View>
                    <Text className="text-sm text-gray-600 mt-1">
                      {notification.message}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationPage; 