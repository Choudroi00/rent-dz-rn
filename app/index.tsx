import { Stack, Link } from 'expo-router';
import { View, Text, Image } from 'react-native';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';

export default function Home() {
  return (
    <Container>
      <Stack.Screen options={{ title: 'Welcome' }} />

      {/* Top content: Image and Welcome Text */}
      <View className="flex-grow justify-center items-center">
        {/* Placeholder for the image section */}
        <View className="flex items-center justify-center h-64 w-full bg-gray-200 mb-8">
          {/* Replace with your image component */}
          <Text>Image Placeholder</Text>
        </View>

        <Text className="text-center text-3xl  mb-2">Welcome to <Text className="text-blue-600">RenniT!</Text></Text>
        <Text className="text-center text-3xl">The rent Master</Text>
      </View>

      {/* Bottom content: Button and Links */}
      <View className="w-full items-center mb-6">
        <Button title="Let's get started" className="w-full" onPress={() => { /* TODO: Add navigation */ }} />

        <View className="flex-row justify-center mt-4">
          <Text className="text-gray-600 font-semibold ">Already have an account? </Text>
          <Link href={{ pathname: '/details', params: { name: 'Login' } }} asChild>
            <Text className="text-blue-600 font-semibold ">Login</Text>
          </Link>
        </View>

        <Link href={{ pathname: '/details', params: { name: 'Terms' } }} asChild className="mt-4">
          <Text className="text-center text-blue-600 text-sm font-semibold ">By using this app you accept our terms</Text>
        </Link>
      </View>

    </Container>
  );
}
