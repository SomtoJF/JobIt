import { useRouter } from "expo-router";
import { useState } from "react";
import {
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Image,
	FlatList,
} from "react-native";
import styles from "./welcome.style";
import { SIZES, icons } from "../../../constants";

const jobTypes = ["Full-Time", "Part-Time", "Contractor"];

export default function Welcome() {
	const router = useRouter();
	const [activeJobType, setActiveJobType] = useState("Full-Time");
	return (
		<View>
			<View style={styles.container}>
				<Text style={styles.userName}>Welcome Somto</Text>
				<Text style={{ ...styles.welcomeMessage, fontWeight: "700" }}>
					Find your perfect job
				</Text>
			</View>
			<View style={styles.searchContainer}>
				<View style={styles.searchWrapper}>
					<TextInput
						style={styles.searchInput}
						value=""
						placeholder="Search for your dream jobs..."
						onChange={() => {}}
					></TextInput>
				</View>
				<TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
					<Image
						source={icons.search}
						resizeMode="contain"
						style={styles.searchBtnImage}
					/>
				</TouchableOpacity>
			</View>
			<View style={styles.tabsContainer}>
				<FlatList
					data={jobTypes}
					renderItem={({ item }) => (
						<TouchableOpacity
							style={styles.tab(activeJobType, item)}
							onPress={() => {
								setActiveJobType(item);
								router.push(`/search/${item}`);
							}}
						>
							<Text style={styles.tabText(activeJobType, item)}>{item}</Text>
						</TouchableOpacity>
					)}
					keyExtractor={(item) => item}
					horizontal
					contentContainerStyle={{ columnGap: SIZES.small }}
				/>
			</View>
		</View>
	);
}
