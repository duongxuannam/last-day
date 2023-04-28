import { darkTheme, forestThem, lightTheme } from 'constants/colors';

export type ITheme = 'light' | 'dark' | 'forest' | '';
export const Themes: ITheme[] = ['light', 'dark', 'forest'];

export const getThemeColor = (theme: ITheme | undefined | string) => {
    switch (theme) {
        case 'light':
            return lightTheme;
        case 'dark':
            return darkTheme;
        case 'forest':
            return forestThem;
        default:
            return lightTheme;
    }
};
