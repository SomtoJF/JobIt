import { SafeAreaView, Text, ScrollView, View } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, SIZES, icons, images } from "../constants";
import {
	Nearbyjobs,
	Popularjobs,
	ScreenHeaderBtn,
	Welcome,
} from "../components";
import { useState } from "react";

const Home = () => {
	const router = useRouter();
	const [search, setSearch] = useState("");

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: COLORS.lightWhite },
					headerShadowVisible: false,
					headerLeft: () => (
						<ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
					),
					headerRight: () => (
						<ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
					),
					headerTitle: "",
				}}
			/>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={{ padding: SIZES.medium }}>
					<Welcome
						searchTerm={search}
						setSearchTerm={setSearch}
						handleClick={() => {
							if (search) {
								router.push(`/search/${search}`);
							}
						}}
					/>
					<Popularjobs />
					<Nearbyjobs />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};
export default Home;
