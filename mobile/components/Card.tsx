import { View, Text, Image } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton';


export default function Card({name, position, votes, image, button,  others, ...rest}: any) {
  return (
    <View className='bg-gray-500 w-full h-[400px] rounded-2xl overflow-hidden mb-5 '>
      <View className='w-full h-[250px]'>
        <Image source={require("@/assets/images/evoting.jpg")} style={{ width: '100%', height: '100%' }} resizeMode='cover' className=' mx-auto mb-8'  />
      </View>
      <View className='p-7 gap-2'>
        <Text className='text-2xl font-semibold'>{name}</Text>
        <Text className='text-2xl font-semibold'>{position}</Text>
        <Text className='text-xl font-semibold'>{others} <Text className='text-3xl'>{votes}</Text></Text>
      </View>
      {/* <View className='absolute bottom-2 left-2 text-black text-lg font-bold flex-row gap-2 items-center mx-auto'>
        <CustomButton title={"Cancle"} handleOnPress={() => {}} backgroundColor="bg-red-500" textColor="white" />
        <CustomButton title={"Vote"} handleOnPress={() => {}} backgroundColor="bg-orange-500" textColor="white" />
      </View> */}
    </View>
  )
}