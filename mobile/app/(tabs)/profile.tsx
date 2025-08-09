import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileCard from '@/components/ProfileCard';

export default function Profile() {
  return (
    <SafeAreaView className='bg-gray-900 h-full'>
      <ScrollView>
        <View className='px-10 py-20'>
          <View className='items-center'>

           <Image 
              source={require("@/assets/images/profile.jpg")} 
              style={{ width: 200, height: 200 }} 
              resizeMode='cover' 
              className='rounded-full mx-auto mb-8'
            />
            <Text className='text-center text-3xl text-white font-bold'>John Doe</Text>
          </View>
          <View className='items-start gap-2 py-5'>
           <ProfileCard/>
           <ProfileCard/>
           <ProfileCard/>
           <ProfileCard/>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}