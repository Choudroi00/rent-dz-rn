import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { MaterialIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';

const ProfilePage = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* Header */}
      <View className="bg-white px-5 py-4 flex-row justify-between items-center border-b border-gray-200">
        <Text className="text-2xl font-bold text-gray-800">Profile</Text>
        <TouchableOpacity className="bg-gray-100 rounded-full p-2">
          <MaterialIcons name="settings" size={24} color="#4A90E2" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Profile Info Section */}
        <View className="bg-white px-5 py-6 items-center border-b border-gray-200">
          <View className="relative">
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop' }}
              className="w-24 h-24 rounded-full"
            />
            <TouchableOpacity className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-2">
              <MaterialIcons name="camera-alt" size={20} color="white" />
            </TouchableOpacity>
          </View>
          <Text className="text-xl font-bold text-gray-800 mt-4">John Doe</Text>
          <Text className="text-gray-500">john.doe@example.com</Text>
          <View className="flex-row mt-4 space-x-4">
            <View className="items-center">
              <Text className="text-xl font-bold text-gray-800">12</Text>
              <Text className="text-gray-500">Rentals</Text>
            </View>
            <View className="items-center">
              <Text className="text-xl font-bold text-gray-800">4.8</Text>
              <Text className="text-gray-500">Rating</Text>
            </View>
            <View className="items-center">
              <Text className="text-xl font-bold text-gray-800">3</Text>
              <Text className="text-gray-500">Reviews</Text>
            </View>
          </View>
        </View>

        {/* Account Settings Section */}
        <View className="bg-white mt-4 px-5 py-4">
          <Text className="text-lg font-semibold text-gray-800 mb-4">Account Settings</Text>
          
          <TouchableOpacity className="flex-row items-center justify-between py-3 border-b border-gray-100">
            <View className="flex-row items-center">
              <View className="bg-blue-100 rounded-full p-2 mr-3">
                <MaterialIcons name="person" size={20} color="#4A90E2" />
              </View>
              <Text className="text-gray-800">Personal Information</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#999" />
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center justify-between py-3 border-b border-gray-100">
            <View className="flex-row items-center">
              <View className="bg-green-100 rounded-full p-2 mr-3">
                <MaterialIcons name="payment" size={20} color="#4CAF50" />
              </View>
              <Text className="text-gray-800">Payment Methods</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#999" />
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center justify-between py-3 border-b border-gray-100">
            <View className="flex-row items-center">
              <View className="bg-purple-100 rounded-full p-2 mr-3">
                <MaterialIcons name="notifications" size={20} color="#9C27B0" />
              </View>
              <Text className="text-gray-800">Notifications</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#999" />
          </TouchableOpacity>
        </View>

        {/* Preferences Section */}
        <View className="bg-white mt-4 px-5 py-4">
          <Text className="text-lg font-semibold text-gray-800 mb-4">Preferences</Text>
          
          <TouchableOpacity className="flex-row items-center justify-between py-3 border-b border-gray-100">
            <View className="flex-row items-center">
              <View className="bg-orange-100 rounded-full p-2 mr-3">
                <MaterialIcons name="language" size={20} color="#FF9800" />
              </View>
              <Text className="text-gray-800">Language</Text>
            </View>
            <View className="flex-row items-center">
              <Text className="text-gray-500 mr-2">English</Text>
              <MaterialIcons name="chevron-right" size={24} color="#999" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center justify-between py-3 border-b border-gray-100">
            <View className="flex-row items-center">
              <View className="bg-red-100 rounded-full p-2 mr-3">
                <MaterialIcons name="dark-mode" size={20} color="#F44336" />
              </View>
              <Text className="text-gray-800">Dark Mode</Text>
            </View>
            <View className="w-12 h-6 bg-gray-200 rounded-full p-1">
              <View className="w-4 h-4 bg-white rounded-full" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Support Section */}
        <View className="bg-white mt-4 px-5 py-4 mb-8">
          <Text className="text-lg font-semibold text-gray-800 mb-4">Support</Text>
          
          <TouchableOpacity className="flex-row items-center justify-between py-3 border-b border-gray-100">
            <View className="flex-row items-center">
              <View className="bg-blue-100 rounded-full p-2 mr-3">
                <MaterialIcons name="help" size={20} color="#4A90E2" />
              </View>
              <Text className="text-gray-800">Help Center</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#999" />
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center justify-between py-3 border-b border-gray-100">
            <View className="flex-row items-center">
              <View className="bg-green-100 rounded-full p-2 mr-3">
                <MaterialIcons name="info" size={20} color="#4CAF50" />
              </View>
              <Text className="text-gray-800">About</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#999" />
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center justify-between py-3">
            <View className="flex-row items-center">
              <View className="bg-red-100 rounded-full p-2 mr-3">
                <MaterialIcons name="logout" size={20} color="#F44336" />
              </View>
              <Text className="text-red-500">Log Out</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfilePage;
