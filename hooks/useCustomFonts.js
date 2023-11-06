import { useFonts } from "expo-font";

export default function useCustomFont() {
	return useFonts({
		DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
		DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
		DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
	});
}
