import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import VoteListCard from '@/components/VoteListCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function VoteList() {
    const route = useRouter()
  return (
    
        <ScrollView>

        <Text className='text-3xl  text-center font-semibold'>Go through the list and select your best candidate</Text>
            <TouchableOpacity onPress={() => route.push('/(votes)/votes')}>
        <View className='flex-row flex-wrap justify-center gap-2 p-2'>
            <VoteListCard/>
            <VoteListCard/>
            <VoteListCard/>
            <VoteListCard/>
            <VoteListCard/>
            <VoteListCard/>
            <VoteListCard/>
            <VoteListCard/>
            <VoteListCard/>
            <VoteListCard/>
            <VoteListCard/>
            <VoteListCard/>
        </View>
            </TouchableOpacity>
        </ScrollView>
    
  )
}