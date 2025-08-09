import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Card from '@/components/Card';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function VoteCounts() {
  return (
    <SafeAreaView className='bg-gray-900 h-full'>
      <ScrollView>
        <View className='px-10 py-20'>

      <Text className='text-4xl text-white text-center font-semibold'>View number of vote of favourite candidates</Text>
      <View className='pt-10'>
        <Card name="Name" position="Position" votes="Votes" image="" others="Others"/>
        <Card name="Name" position="Position" votes="Votes" image="" others="Others"/>
      </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}