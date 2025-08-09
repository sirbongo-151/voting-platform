import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Card from '@/components/Card';
import CustomButton from '@/components/CustomButton';

export default function Votes() {
  return (
    <ScrollView className='bg-gray-900 h-full'>
      <Text className='text-3xl text-white text-center font-semibold mt-10'>Just a button click & make sure you choose right leader</Text>
      <View className='py-10'>
        <Card name="Name" position="Position"  image="" button="Vote" />
      </View>
      <View className=' flex-1 flex-row gap-2 items-center mx-auto'>
        <CustomButton title={"Cancle"} handleOnPress={() => {}} backgroundColor="bg-red-500" textColor="white" />
        <CustomButton title={"Vote"} handleOnPress={() => {}} backgroundColor="bg-orange-500" textColor="white" />
      </View> 
      
    </ScrollView>
  )
}