import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  SafeAreaView,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import {
  ChevronDownIcon,
  UserIcon,
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 p-4 rounded-full bg-gray-300"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-lg">
            Current Location <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search */}
      <View className="flex-row items-center mx-4 pb-2 space-x-2">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 rounded-lg">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and coisines"
            keyboardType="default"
          />
        </View>

        <AdjustmentsHorizontalIcon size={20} color="#00CCBB" />
      </View>

      {/* Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Categories */}
        <Categories />

        {/* Featured Rows */}
        <FeaturedRow
          id="1"
          title="Featured"
          description="Paid placements for our partner"
        />
        <FeaturedRow
          id="2"
          title="Tasty Discounts!"
          description="Paid placements for our partner"
        />
        <FeaturedRow
          id="3"
          title="Offers near you!"
          description="Paid placements for our partner"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
