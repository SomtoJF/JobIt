import { useRouter } from "expo-router";
import React from "react";
import {
	View,
	Text,
	TouchableOpacity,
	FlatList,
	ActivityIndicator,
} from "react-native";
import styles from "./popularjobs.style";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";

export default function Popularjobs() {
	const router = useRouter();
	return (
		<View>
			<Text>Popular Jobs</Text>
		</View>
	);
}
