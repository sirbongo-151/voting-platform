import { View, Text, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import CategoryItems from '@/components/CategoryItems';

export default function Home() {
  return (
    <SafeAreaView className='bg-gray-900 h-full'>
      <ScrollView>
        <StatusBar backgroundColor="#000000" barStyle="light-content" />

        {/* Hero Section */}
        <View className='px-10 py-20'>
          <Text className='text-center text-4xl text-white font-semibold'>
            Your Voice, Your Vote, Your Future <Text className='text-5xl font-bold text-orange-500'>All Online</Text>
          </Text>
          <Text className='text-center text-2xl text-gray-400 mt-2'>
            Vote Anytime, Anywhere | Securely and Conveniently
          </Text>
        </View>

        {/* Category Section */}
        <View className='flex-row flex-wrap justify-center gap-4 px-5 pb-20'>
          <CategoryItems/>
          <CategoryItems/>
          <CategoryItems/>
          <CategoryItems/>
          <CategoryItems/>
          <CategoryItems/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
