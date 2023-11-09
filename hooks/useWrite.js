import { writeFile } from "node:fs";
import { useEffect } from "react";
import path from "node:path";

const useWrite = (json, currentFileDir, relativePathToTargetFile) => {
	useEffect(async () => {
		writeFile(
			path.resolve(currentFileDir, relativePathToTargetFile),
			JSON.stringify(json),
			"utf8",
			(err) => {
				console.error(err);
			}
		);
	}, []);
};

export default useWrite;
