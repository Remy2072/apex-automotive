import { icons, type IconName } from '$lib/icons';

export function getIcon(name: IconName) {
	return icons[name];
}
