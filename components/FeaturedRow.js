import { View, Text, ScrollView } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ title, description, featuredCategory }) => {
  return (
    <View className="px-4 mt-4">
      <View className="flex-row items-center justify-between">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={
          {
            //   paddingHorizontal: 15,
          }
        }
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurant Card... */}
        <RestaurantCard
          id="1"
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is a Test Description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id="1"
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is a Test Description"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id="1"
          imgUrl="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="This is a Test Description"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
