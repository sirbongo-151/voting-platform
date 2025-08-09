import { View, Text, ScrollView, KeyboardAvoidingView, Platform, StatusBar, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Forms from '@/components/Forms';
import CustomButton from '@/components/CustomButton';
import { Link, useRouter} from 'expo-router';


export default function Signup() {
  const [idNumber, setIdNumber] = useState('');
  const [secretkey, setSecretkey] = useState('');
  const [name, setName] = useState('');

  const route = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }} className='bg-gray-900 text-white'>
      <ScrollView>
        <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"} 
          style={{ flex: 1 }} 
        >
            <StatusBar backgroundColor="#000000" barStyle="light-content" />
          <View className='w-full h-[85vh] px-10 py-20 '>
            <Image source={require("@/assets/images/evoting.jpg")} style={{ width: 200, height: 200 }}
              className='rounded-full mx-auto mb-8'/>
            <Text className='text-3xl text-white text-center font-bold mb-10'>Sign Up</Text>
           <Forms
                title="Name"
                placeholder="John Doe"
                keyboardType="email-address"
                onChangeText={(text) => setName(text)}
                value={name}
                />
           <Forms
                title="ID Number"
                placeholder="5123456789"
                keyboardType="email-address"
                onChangeText={(text) => setIdNumber(text)}
                value={idNumber}
                />
    
          <Forms
                title="Secret Key"
                placeholder="........."
                keyboardType="email-address"
                onChangeText={(text) => setSecretkey(text)}
                value={secretkey}
                secureTextEntry={true}
                />

                <CustomButton title="Signup" handleOnPress={() => route.navigate('../(tabs)/home')} backgroundColor="orange-500" textColor="white"/>
                <Text className='text-white text-center mt-5'>Already have an account? <Link href="./login" 
                                className="text-lg text-orange-500  p-2 rounded-lg">Log In</Link></Text>   

         
         </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}
