import React from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import styles from "./tabs.style";
import { SIZES } from "../../../constants";

const TabButton = ({ name, activeTab, onHandleSeachType }) => {
	return (
		<Pressable style={styles.btn(name, activeTab)} onPress={onHandleSeachType}>
			<Text style={styles.btnText(name, activeTab)}>{name}</Text>
		</Pressable>
	);
};

export default function Tabs({ tabs, activeTab, setActiveTab }) {
	return (
		<View style={styles.container}>
			<FlatList
				data={tabs}
				renderItem={({ item }) => (
					<TabButton
						name={item}
						activeTab={activeTab}
						onHandleSeachType={() => setActiveTab(item)}
					/>
				)}
				horizontal
				showsHorizontalScrollIndicator={false}
				keyExtractor={(item) => item}
				contentContainerStyle={{ columnGap: SIZES.small / 2 }}
			/>
		</View>
	);
}
