import {Dimensions} from 'react-native';
const { width, height } = Dimensions.get("window");

export const COLORS ={
    primary: '#D95500', // dark-Orange
    secondary: '#2E2E2E', // Black
    white: '#FFFFFF',
    offWhite: '#00000000', 
    darkGrey: '#000000AF',
    black1: '#000000',
    black2: '#000100',
    lightGrey1: '#D5D5D5',
    lightGrey2: '#D4D4D4',
    lightGrey3: '#C1C1C1',
    blue: '#2B88C9',
   
};

export const SIZES = {
    
    width,
    height,

    h1:50,
    h2:30,
    h3:24,
    h4:22,
    h5:20,
    h6:16,
    h7:15,
    h8:14,
    h9:12,

};

export const FONTS = {

    h1:{fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h1, lineHeight: 76},
    h2:{fontFamily: 'Poppins-Regular', fontSize: SIZES.h5, lineHeight: 30},
    h3:{fontFamily: 'Poppins-Regular', fontSize: SIZES.h8, lineHeight: 21},
    h4:{fontFamily: 'Poppins-Medium', fontSize: SIZES.h2, lineHeight: 46},
    h5:{fontFamily: 'Poppins-Regular', fontSize: SIZES.h7, lineHeight: 23},
    h6:{fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h1, lineHeight: 76},
    h7:{fontFamily: 'Poppins-Light', fontSize: SIZES.h3, lineHeight: 35},
    h8:{fontFamily: 'Poppins-Light', fontSize: SIZES.h5, lineHeight: 30},
    h9:{fontFamily: 'Poppins-Medium', fontSize: SIZES.h9, lineHeight: 18},
    h10:{fontFamily: 'Poppins-Light', fontSize: SIZES.h9, lineHeight: 18},
    h11:{fontFamily: 'Poppins-Medium', fontSize: SIZES.h5, lineHeight: 30},
    h12:{fontFamily: 'Poppins-Light', fontSize: SIZES.h4, lineHeight: 33},
    h13:{fontFamily: 'Poppins-Light', fontSize: SIZES.h2, lineHeight: 46},
    h14:{fontFamily: 'Poppins-Medium', fontSize: SIZES.h6, lineHeight: 25},
    h15:{fontFamily: 'Poppins-Medium', fontSize: SIZES.h4, lineHeight: 33},
    h16:{fontFamily: 'Poppins-Regular', fontSize: SIZES.h6, lineHeight: 25},

};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;