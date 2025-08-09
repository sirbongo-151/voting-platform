import {  Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CustomButton({title, handleOnPress, backgroundColor, textColor, ...props}: any) {
  return (
    <TouchableOpacity onPress={handleOnPress} className={`bg-${backgroundColor} p-4 rounded-lg items-center`} >
      <Text className={`text-${textColor} text-xl font-semibold`}>{title}</Text>
    </TouchableOpacity>
  )
}