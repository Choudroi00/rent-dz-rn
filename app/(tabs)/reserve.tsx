import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, SafeAreaView, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Button } from '../../components/Button';

export default function ReservationPage() {
  const [formData, setFormData] = useState({
    pickupDate: '',
    returnDate: '',
    location: '',
    carType: '',
    additionalNotes: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    // TODO: Implement reservation submission logic
    console.log('Reservation submitted:', formData);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="light-content" backgroundColor="#4A90E2" />
      
      {/* Header */}
      <View className="bg-blue-500 px-5 py-4 flex-col space-y-6 rounded-b-3xl">
        <View className="flex-row justify-between items-center py-4">
          <View className="flex-row items-center">
            <MaterialIcons name="directions-car" size={24} color="white" />
            <Text className="text-white text-lg font-semibold ml-2">Car Reservation</Text>
          </View>
        </View>
      </View>

      <ScrollView className="flex-1 px-5 mb-20" showsVerticalScrollIndicator={false}>
        <View className="mt-6">
          <View className="flex-col mb-4">
            <Text className="text-xl font-bold text-gray-800">Reservation Details</Text>
            <View className="w-[70%] h-2 rounded-full bg-blue-500 mt-1" />
          </View>
          
          <View className="space-y-4">
            <View>
              <Text className="text-sm font-medium mb-1 text-gray-700">Pickup Date</Text>
              <View className="bg-white rounded-[25px] flex-row items-center px-4 h-12 border border-gray-200">
                <MaterialIcons name="calendar-today" size={20} color="#999" />
                <TextInput
                  className="flex-1 text-base text-gray-800 ml-3"
                  placeholder="Select pickup date"
                  value={formData.pickupDate}
                  onChangeText={(value) => handleInputChange('pickupDate', value)}
                />
              </View>
            </View>

            <View>
              <Text className="text-sm font-medium mb-1 text-gray-700">Return Date</Text>
              <View className="bg-white rounded-[25px] flex-row items-center px-4 h-12 border border-gray-200">
                <MaterialIcons name="calendar-today" size={20} color="#999" />
                <TextInput
                  className="flex-1 text-base text-gray-800 ml-3"
                  placeholder="Select return date"
                  value={formData.returnDate}
                  onChangeText={(value) => handleInputChange('returnDate', value)}
                />
              </View>
            </View>

            <View>
              <Text className="text-sm font-medium mb-1 text-gray-700">Location</Text>
              <View className="bg-white rounded-[25px] flex-row items-center px-4 h-12 border border-gray-200">
                <MaterialIcons name="location-on" size={20} color="#999" />
                <TextInput
                  className="flex-1 text-base text-gray-800 ml-3"
                  placeholder="Enter pickup location"
                  value={formData.location}
                  onChangeText={(value) => handleInputChange('location', value)}
                />
              </View>
            </View>

            <View>
              <Text className="text-sm font-medium mb-1 text-gray-700">Car Type</Text>
              <View className="bg-white rounded-[25px] flex-row items-center px-4 h-12 border border-gray-200">
                <MaterialIcons name="directions-car" size={20} color="#999" />
                <TextInput
                  className="flex-1 text-base text-gray-800 ml-3"
                  placeholder="Select car type"
                  value={formData.carType}
                  onChangeText={(value) => handleInputChange('carType', value)}
                />
              </View>
            </View>

            <View>
              <Text className="text-sm font-medium mb-1 text-gray-700">Additional Notes</Text>
              <View className="bg-white rounded-[25px] px-4 py-3 border border-gray-200">
                <TextInput
                  className="text-base text-gray-800 h-24"
                  placeholder="Any special requirements?"
                  multiline
                  value={formData.additionalNotes}
                  onChangeText={(value) => handleInputChange('additionalNotes', value)}
                />
              </View>
            </View>

            <Button
              onPress={handleSubmit}
              className="mt-6 bg-primary rounded-xl py-3"
              title="Book Now"
            >
              <Text className="text-white text-center font-semibold text-lg">Book Now</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
} 