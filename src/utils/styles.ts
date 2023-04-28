import { responsiveWidth } from './responsive';

export const COMMON_STYLES = {
    flex: {
        flex: 1,
    },
    flexCenter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    screenPadding: responsiveWidth(16),
} as const;
