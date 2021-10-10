export const variables = {
	googleSheet: globalThis?.process?.env?.VITE_GOOGLE_SHEET ?? import.meta.env?.VITE_GOOGLE_SHEET
};
