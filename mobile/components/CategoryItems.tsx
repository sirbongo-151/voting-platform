import { View, Text, Image } from 'react-native'
import React from 'react'

export default function CategoryItems() {
  return (
    
<View className='relative bg-zinc-800 w-48 h-48 rounded-2xl overflow-hidden'>
  
  <Image 
    source={require("@/assets/images/evoting.jpg")} 
    style={{ width: '100%', height: '100%' }} 
    resizeMode='cover' 
  />
  <Text className='absolute bottom-2 left-2 text-black text-lg font-bold'>
    CategoryItems
  </Text>
</View>
  )
}