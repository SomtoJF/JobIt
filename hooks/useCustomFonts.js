import {
	useFonts,
	DMSans_400Regular,
	DMSans_400Regular_Italic,
	DMSans_500Medium,
	DMSans_500Medium_Italic,
	DMSans_700Bold,
	DMSans_700Bold_Italic,
} from "@expo-google-fonts/dm-sans";

export default function useCustomFont() {
	return useFonts({
		DMSans_400Regular,
		DMSans_400Regular_Italic,
		DMSans_500Medium,
		DMSans_500Medium_Italic,
		DMSans_700Bold,
		DMSans_700Bold_Italic,
	});
}
