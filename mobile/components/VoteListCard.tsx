import { View, Text, Image } from 'react-native';
import React from 'react';

export default function VoteListCard() {
  return (
    <View className="bg-gray-600 flex-row items-center w-full h-[100px] rounded-2xl overflow-hidden mb-5 p-4">
      {/* Profile Image */}
      <Image
        source={require("@/assets/images/profile.jpg")}
        style={{ width: 60, height: 60 }}
        resizeMode="cover"
        className="rounded-full"
      />

      {/* Text beside the image */}
      <View className="ml-4 flex-1">
        <Text className="text-white text-lg font-semibold">John Doe</Text>
        <Text className="text-gray-200 text-sm">Position: President</Text>
      </View>
    </View>
  );
}
