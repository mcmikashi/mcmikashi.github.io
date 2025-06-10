import { browser } from '$app/environment';

const localStorageKey = 'theme';

export enum ThemeType {
	Light = 'lofi',
	Dark = 'black'
}

function getDefaultTheme() {
	if (browser && localStorage.getItem(localStorageKey)) {
		return localStorage.getItem(localStorageKey)! as ThemeType;
	} else if (
		browser &&
		window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: dark)').matches
	) {
		return ThemeType.Dark;
	}
	return ThemeType.Light;
}

export class Theme {
	value = $state<ThemeType>();
	constructor() {
		this.value = getDefaultTheme();
	}

	toggle() {
		const newValue = this.value === ThemeType.Light ? ThemeType.Dark : ThemeType.Light;
		this.value = newValue;
		localStorage.setItem(localStorageKey, newValue);
	}
}

export const theme = new Theme();
