import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./company.style";
import { icons } from "../../../constants";
import { checkImageURL } from "../../../utils";

export default function Company({
	companyLogo,
	jobTitle,
	companyName,
	location,
}) {
	return (
		<View style={styles.container}>
			<View style={styles.logoBox}></View>
			<Image
				source={{
					uri: checkImageURL(companyLogo)
						? companyLogo
						: icons.fallbackCompanyLogo,
				}}
				style={styles.logoImage}
			/>
			<View style={styles.jobTitleBox}>
				<Text style={styles.jobTitle}>{jobTitle}</Text>
			</View>
			<View style={styles.companyInfoBox}>
				<Text style={styles.companyName}>{companyName} / </Text>
				<View style={styles.locationBox}>
					<Image
						source={icons.location}
						resizeMode="contain"
						style={styles.locationImage}
					/>
				</View>
			</View>
		</View>
	);
}
