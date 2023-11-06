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
import { COLORS, SIZES } from "../../../constants";
import useFetch from "../../../hooks/useFetch";

export default function Popularjobs() {
	const router = useRouter();
	const { data, isLoading, error } = useFetch("search", {
		query: "react developer",
		num_pages: 1,
	});

	console.log(data);

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={{ ...styles.headerTitle, fontWeight: "500" }}>
					Popular Jobs
				</Text>
				<TouchableOpacity onPress={() => {}}>
					<Text style={styles.headerBtn}>Show all</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.cardsContainer}>
				{isLoading ? (
					<ActivityIndicator size={"large"} color={COLORS.primary} />
				) : error ? (
					"Something went wrong"
				) : (
					<FlatList
						data={data}
						renderItem={({ item }) => <PopularJobCard item={item} />}
						keyExtractor={(item) => item?.job_id}
						contentContainerStyle={{ columnGap: SIZES.medium }}
						horizontal
					/>
				)}
			</View>
		</View>
	);
}
