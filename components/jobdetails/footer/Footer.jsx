import React from "react";
import { Image, Linking, Pressable, Text, View } from "react-native";
import styles from "./footer.style";
import { icons } from "../../../constants";

export default function Footer({ url }) {
	return (
		<View style={styles.container}>
			<Pressable style={styles.likeBtn}>
				<Image
					style={styles.likeBtnImage}
					source={icons.heartOutline}
					resizeMode="contain"
				/>
			</Pressable>
			<Pressable
				style={styles.applyBtn}
				onPress={() => {
					Linking.openURL(url);
				}}
			>
				<Text style={styles.applyBtnText}>Apply for job</Text>
			</Pressable>
		</View>
	);
}
