import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5, Entypo } from '@expo/vector-icons';

export default function ProfileScreen() {
  const menuItems = [
    { icon: 'person-outline', label: 'Personal information' },
    { icon: 'attach-file', label: 'Documents', iconLib: 'MaterialIcons' },
    { icon: 'map', label: 'Reservations', iconLib: 'FontAwesome5' },
    { icon: 'article', label: 'Saved articles', iconLib: 'MaterialIcons' },
    { icon: 'account-balance-wallet', label: 'My Wallet', iconLib: 'MaterialIcons' },
    { icon: 'person-add', label: 'Referrals', iconLib: 'Ionicons' },
    { icon: 'settings', label: 'Settings' },
    { icon: 'log-out', label: 'Log out', iconLib: 'Entypo' },
  ];

  return (
    <ScrollView className="flex-1 bg-white px-4">
      <Text className="text-2xl font-bold mt-6 mb-1 text-center ">My Profile</Text>
      <Text className="text-lg font-semibold text-gray-500 mb-5">Customer</Text>

      <Text className="text-lg font-bold text-black mb-4">Account</Text>

      <View className="bg-grey5 rounded-[25px] mb-6 mx-3">
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            className="flex-row items-center p-6"
          >
            {getIcon(item.icon, item.iconLib || 'Ionicons')}
            <Text className="flex-1 font-bold text-2xl text-gray-800 ">{item.label}</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>
        ))}
      </View>

      <Text className="text-sm font-semibold text-gray-700 mb-2">Application</Text>
    </ScrollView>
  );
}

function getIcon(name: string, lib: string = 'Ionicons') {
  const size = 20;
  const color = '#333';
  const style = { marginRight: 12, width: 30 };

  switch (lib) {
    case 'MaterialIcons':
      return <MaterialIcons name={name as any} size={size} color={color} style={style} />;
    case 'FontAwesome5':
      return <FontAwesome5 name={name as any} size={18} color={color} style={style} />;
    case 'Entypo':
      return <Entypo name={name as any} size={18} color={color} style={style} />;
    default:
      return <Ionicons name={name as any} size={size} color={color} style={style} />;
  }
}
