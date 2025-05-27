import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  SafeAreaView,
} from 'react-native';

import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

const HomePage = () => {
  const brandLogos = Array(6).fill(null);
  
  return (
    <SafeAreaView className="flex-1 bg-gray-50 ">
      <StatusBar barStyle="light-content" backgroundColor="#4A90E2" />
      
      {/* Header */}
      <View className="bg-blue-500 px-5 py-4 flex-col  space-y-6  rounded-b-3xl">
        <View className="flex-row justify-between items-center py-4">
            <View className="flex-row items-center">
                <MaterialIcons name="location-on" size={24} color="white" />
                <Text className="text-white text-lg font-semibold ml-2">Algeria, Algiers</Text>
            </View>
                
            <TouchableOpacity className="bg-white rounded-2xl p-2">
                <MaterialIcons name="person" size={24} color="#4A90E2" />
            </TouchableOpacity>
        </View>

      {/* Search Section */}

        <View className="bg-blue-500 px-5 pb-5 flex-row items-center gap-3">
            <View className="flex-1 bg-white rounded-[25px] flex-row items-center px-4 h-12">
                <MaterialIcons name="search" size={20} color="#999" className="mr-3" />
                <TextInput
                    className="flex-1 text-base text-gray-800 rounded-[25px]"
                    placeholder="Search nearby"
                    placeholderTextColor="#999"
                />
            </View>
            
            <TouchableOpacity className="bg-white rounded-xl p-4">
                <MaterialIcons name="tune" size={20} color="#4A90E2" />
            </TouchableOpacity>
        </View>   
      </View>
      

      
      <ScrollView className="flex-1 px-5 mb-20" showsVerticalScrollIndicator={false}>
        {/* Top Brands Section */}
        <View className="mt-6">
          <View className="flex-row justify-between items-center mb-4">
            <View className="flex-col">
                <Text className="text-xl font-bold text-gray-800">Top Brands</Text>
                <View className="w-[70%] h-2 rounded-full bg-blue-500 mt-1" />
            </View>
            <TouchableOpacity className="flex-row items-center">
              <Text className="text-gray-500 text-sm mr-1">see more</Text>
              <MaterialIcons name="chevron-right" size={16} color="#999" />
            </TouchableOpacity>
          </View>
          
          <View className="flex-row flex-wrap justify-between">
            {brandLogos.map((_, index) => (
              <TouchableOpacity key={index} className="w-[30%] aspect-square mb-4">
                <View className="flex-1 bg-gray-200 rounded-2xl" />
              </TouchableOpacity>
            ))}
          </View>
        </View>
        
        {/* Nearby Articles Section */}
        <View className="mt-6">
          <View className="flex-row justify-between items-center mb-4">
            <View className="flex-col">
                <Text className="text-xl font-bold text-gray-800">Nearby Articles</Text>
                
                <View className="w-[70%] h-2 rounded-full bg-blue-500 mt-1" />
            </View>
            <TouchableOpacity className="flex-row items-center">
              <Text className="text-gray-500 text-sm mr-1">see more</Text>
              <MaterialIcons name="chevron-right" size={16} color="#999" />
            </TouchableOpacity>
          </View>


        {/* Car Card 1*/}
          
          <View className="flex-col justify-between container bg-gray-200 rounded-2xl p-2 mb-4">
            <TouchableOpacity className="mb-4">
                <View className="relative rounded-2xl overflow-hidden">
                  <Image
                      source={{ uri: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=250&fit=crop' }}
                      className="w-full h-48"
                  />
                  <View className="absolute inset-0 bg-white/10 backdrop-blur-sm w-[40%] p-4 justify-between">
                      <View className="bg-white rounded-lg px-3 py-1 self-start">
                        <Text className="text-gray-800 text-xs font-medium">Mercedes</Text>
                      </View>
                      <View>
                        <Text className="text-white text-xl font-bold mb-1">S 500 Sedan</Text>
                        <View className="flex-row items-center">
                            <FontAwesome name="star" size={14} color="#FFD700" />
                            <Text className="text-white text-sm ml-1 font-medium">4.9</Text>
                        </View>
                      </View>
                  </View>
                </View>
            </TouchableOpacity>
          
            {/* Car Details */}
            <View className="flex-row justify-between mb-6">
                <View className="flex-1 items-center">
                    <Text className="text-gray-600 text-sm">Automatic</Text>
                </View>
                <View className="flex-1 items-center">
                    <Text className="text-gray-600 text-sm">5 seats</Text>
                </View>
                <View className="flex-1 items-center">
                    <Text className="text-gray-600 text-sm">Diesel</Text>
                </View>
            </View>
            <View className="flex-row justify-between items-center mx-4">
                <View>
                    <Text className="text-black text-xl font-bold">D 35000</Text>
                    <Text className='text-gray-500 text-base'>Day</Text>
                </View>
                <TouchableOpacity className="bg-blue-500 rounded-xl p-2">
                    <Text className="text-white text-sm px-5 font-semibold">Rent Now</Text>
                </TouchableOpacity>
            </View>
          </View>
        {/* Car Card 2*/}

          <View className="flex-col justify-between container bg-gray-200 rounded-2xl p-2 mb-4">
            <TouchableOpacity className="mb-4">
                <View className="relative rounded-2xl overflow-hidden">
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=250&fit=crop' }}
                    className="w-full h-48"
                />
                <View className="absolute inset-0 bg-white/10 backdrop-blur-sm w-[40%] p-4 justify-between">
                    <View className="bg-white rounded-lg px-3 py-1 self-start">
                    <Text className="text-gray-800 text-xs font-medium">Mercedes</Text>
                    </View>
                    <View>
                    <Text className="text-white text-xl font-bold mb-1">S 500 Sedan</Text>
                    <View className="flex-row items-center">
                        <FontAwesome name="star" size={14} color="#FFD700" />
                        <Text className="text-white text-sm ml-1 font-medium">4.9</Text>
                    </View>
                    </View>
                </View>
                </View>
            </TouchableOpacity>
          
            {/* Car Details */}
            <View className="flex-row justify-between mb-6">
                <View className="flex-1 items-center">
                    <Text className="text-gray-600 text-sm">Automatic</Text>
                </View>
                <View className="flex-1 items-center">
                    <Text className="text-gray-600 text-sm">5 seats</Text>
                </View>
                <View className="flex-1 items-center">
                    <Text className="text-gray-600 text-sm">Diesel</Text>
                </View>
            </View>
            <View className="flex-row justify-between mx-4">
                <View>
                    <Text className="text-black text-xl font-bold">D 35000</Text>
                </View>
                <TouchableOpacity className="bg-blue-500 rounded-xl p-2">
                    <Text className="text-white text-sm px-5 font-semibold">Rent Now</Text>
                </TouchableOpacity>
            </View>
          </View>

       
        </View>
      </ScrollView>

    </SafeAreaView>
  );
};

export default HomePage;