//import { homedir } from 'os';
import { toSystemSlashes } from './path-utils';
import { dirname } from 'path';

export default (profileFromArgs: string, appName: string, altInstanceId: string) => {
	let homeDir = dirname(process.execPath);
	let profileDir = profileFromArgs;

	homeDir = `${homeDir}/data`

	if (!altInstanceId) {
		profileDir = `${homeDir}/profile`;
	} else {
		profileDir = `${homeDir}/altprofile/${appName}-${altInstanceId}`;
	}
	homeDir = profileDir;
	
	return {
		rootProfileDir: toSystemSlashes(profileDir, 'linux'),
		homeDir: toSystemSlashes(homeDir, 'linux'),
	};
};
