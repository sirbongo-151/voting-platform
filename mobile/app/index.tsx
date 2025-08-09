import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl">I love programming</Text>
      <Link href="../(auth)/login" className="text-3xl text-white bg-blue-500 p-2 rounded-lg">Go to Login</Link>
    </View>
  );
}
