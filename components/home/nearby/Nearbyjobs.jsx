import { useRouter } from "expo-router";
import React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import styles from "./nearbyjobs.style";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import { COLORS } from "../../../constants";
import useFetch from "../../../hooks/useFetch";

export default function NearbyJobs() {
	const router = useRouter();
	const { data, isLoading, error } = useFetch("search", {
		query: "react developer",
		num_pages: 1,
	});

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={{ ...styles.headerTitle, fontWeight: "500" }}>
					Nearby Jobs
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
					data?.map((job) => (
						<NearbyJobCard
							job={job}
							key={job?.job_id}
							handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
						/>
					))
				)}
			</View>
		</View>
	);
}
