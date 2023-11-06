import { Stack } from "expo-router";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import useCustomFont from "../hooks/useCustomFonts";

SplashScreen.preventAutoHideAsync();
const Layout = () => {
	const [fontsLoaded, fontError] = useCustomFont();

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded || fontError) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded, fontError]);

	if (!fontsLoaded && !fontError) {
		return null;
	}

	return <Stack onLayout={onLayoutRootView} />;
};

export default Layout;
