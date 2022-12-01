import { View, Text, Pressable, Image } from "react-native";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.5 : 1,
        },
      ]}
      className="bg-white mr-3 shadow rounded-lg"
    >
      <Image source={{ uri: imgUrl }} className="h-36 w-64 rounded-t-lg" />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-teal-700">{rating}</Text> • {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <MapPinIcon color="gray" size={22} opacity={0.4} />
          <Text className="text-sm text-gray-500">Near by • {address}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default RestaurantCard;
