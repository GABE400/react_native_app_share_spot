import { Image, ScrollView, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import CustomButton from "@/components/CustomButton";

export default function index() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center h-full px-4">
          <Image
            source={images.mainlogo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary-200">CG</Text>
            </Text>

            <Image
              source={images.path}
              className="w-[134px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where Creativity Meets Innovation: embark on a journey of limitess
            exploration with Aora
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => {}}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
