import React from "react";
import { Text, View } from "react-native";

import styles from "./about.style";

export default function About({ info }) {
	return (
		<View style={styles.container}>
			<Text style={styles.headText}>About the Job:</Text>
			<View style={styles.contentBox}>
				<Text style={styles.contextText}>{info}</Text>
			</View>
		</View>
	);
}
