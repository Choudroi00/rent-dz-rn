import React from 'react';
import { View, Text, ScrollView, SafeAreaView, StatusBar, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

const favoriteCars = [
  {
    id: 1,
    brand: 'Mercedes',
    model: 'S 500 Sedan',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=250&fit=crop',
    price: 35000,
    rating: 4.9,
    features: {
      transmission: 'Automatic',
      seats: 5,
      fuel: 'Diesel'
    }
  },
  {
    id: 2,
    brand: 'BMW',
    model: 'M5 Competition',
    image: 'https://images.unsplash.com/photo-1555215695-300b0ca6ba4d?w=400&h=250&fit=crop',
    price: 40000,
    rating: 4.8,
    features: {
      transmission: 'Automatic',
      seats: 5,
      fuel: 'Petrol'
    }
  },
  {
    id: 3,
    brand: 'Audi',
    model: 'RS7 Sportback',
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=400&h=250&fit=crop',
    price: 38000,
    rating: 4.7,
    features: {
      transmission: 'Automatic',
      seats: 5,
      fuel: 'Petrol'
    }
  }
];

const LikesPage = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="light-content" backgroundColor="#4A90E2" />
      
      {/* Header */}
      <View className="bg-blue-500 px-5 py-4 flex-col space-y-6 rounded-b-3xl">
        <View className="flex-row justify-between items-center py-4">
          <View className="flex-row items-center">
            <MaterialIcons name="favorite" size={24} color="white" />
            <Text className="text-white text-lg font-semibold ml-2">Favorites</Text>
          </View>
          <TouchableOpacity>
            <MaterialIcons name="sort" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 px-5 mb-20" showsVerticalScrollIndicator={false}>
        <View className="mt-6">
          <View className="flex-col mb-4">
            <Text className="text-xl font-bold text-gray-800">Saved Cars</Text>
            <View className="w-[70%] h-2 rounded-full bg-blue-500 mt-1" />
          </View>

          <View className="space-y-4">
            {favoriteCars.map((car) => (
              <View key={car.id} className="flex-col justify-between bg-gray-200 rounded-2xl p-2">
                <TouchableOpacity className="mb-4">
                  <View className="relative rounded-2xl overflow-hidden">
                    <Image
                      source={{ uri: car.image }}
                      className="w-full h-48"
                    />
                    <View className="absolute inset-0 bg-white/10 backdrop-blur-sm w-[40%] p-4 justify-between">
                      <View className="bg-white rounded-lg px-3 py-1 self-start">
                        <Text className="text-gray-800 text-xs font-medium">{car.brand}</Text>
                      </View>
                      <View>
                        <Text className="text-white text-xl font-bold mb-1">{car.model}</Text>
                        <View className="flex-row items-center">
                          <FontAwesome name="star" size={14} color="#FFD700" />
                          <Text className="text-white text-sm ml-1 font-medium">{car.rating}</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              
                {/* Car Details */}
                <View className="flex-row justify-between mb-6">
                  <View className="flex-1 items-center">
                    <Text className="text-gray-600 text-sm">{car.features.transmission}</Text>
                  </View>
                  <View className="flex-1 items-center">
                    <Text className="text-gray-600 text-sm">{car.features.seats} seats</Text>
                  </View>
                  <View className="flex-1 items-center">
                    <Text className="text-gray-600 text-sm">{car.features.fuel}</Text>
                  </View>
                </View>

                <View className="flex-row justify-between items-center mx-4 mb-2">
                  <View>
                    <Text className="text-black text-xl font-bold">D {car.price}</Text>
                    <Text className="text-gray-500 text-base">Day</Text>
                  </View>
                  <View className="flex-row space-x-2">
                    <TouchableOpacity className="bg-red-500 rounded-xl p-2">
                      <MaterialIcons name="favorite" size={20} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-blue-500 rounded-xl p-2">
                      <Text className="text-white text-sm px-5 font-semibold">Rent Now</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LikesPage; 