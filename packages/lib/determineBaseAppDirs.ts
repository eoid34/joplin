import { homedir } from 'os';
import { toSystemSlashes } from './path-utils';
import { dirname, join } from 'path';

export default (profileFromArgs: string, appName: string, altInstanceId: string) => {
	let profileDir = '';
	let homeDir = '';

	if (profileFromArgs) {
		profileDir = profileFromArgs;
		homeDir = profileDir;
	} else if (process && process.env && process.env.PORTABLE_EXECUTABLE_DIR) {
		profileDir = `${process.env.PORTABLE_EXECUTABLE_DIR}/JoplinProfile`;
		homeDir = process.env.PORTABLE_EXECUTABLE_DIR;
	} else {
		if (!altInstanceId) {
			profileDir = `${homedir()}/.config/${appName}`;
		} else {
			profileDir = `${homedir()}/.config/${appName}-${altInstanceId}`;
		}
		homeDir = homedir();
	}
	
    homeDir = dirname(process.execPath);
	profileDir = join(homeDir, 'data', 'profile');

	return {
		rootProfileDir: toSystemSlashes(profileDir, 'linux'),
		homeDir: toSystemSlashes(homeDir, 'linux'),
	};
};
