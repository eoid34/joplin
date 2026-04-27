//import { homedir } from 'os';
import { toSystemSlashes } from './path-utils';
import { dirname } from 'path';

export default (profileFromArgs: string, appName: string, altInstanceId: string) => {
	let homeDir = dirname(process.execPath);
	let profileDir = '';

	if (profileFromArgs) {
		profileDir = profileFromArgs;
	} else {
		if (!altInstanceId) {
			//profileDir = `${homeDir}/data/profile`;
			profileDir = `${homeDir}/JoplinProfile`;
		} else {
			profileDir = `${homeDir}/data/altprofile/${appName}-${altInstanceId}`;
		}
	}
	
	return {
		rootProfileDir: toSystemSlashes(profileDir, 'linux'),
		homeDir: toSystemSlashes(homeDir, 'linux'),
	};
};
