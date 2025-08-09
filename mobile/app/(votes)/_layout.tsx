import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';

export default function VotesLayout() {
  return (
    <Stack>
      <Stack.Screen name="votes" options={{headerShown: false}} />
      <Stack.Screen name="voteList" options={{headerShown: false}} />
    </Stack>
  )
}