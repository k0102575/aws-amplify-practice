/* eslint-disable @typescript-eslint/naming-convention */
export interface PindirectTheme {
  color: {
    'APP/Black': string;
    'APP/White': string;
    'APP/Dim': string;
    Black: string;
    White: string;
    'White/0.6': string;
    'Gray/01': string;
    'Gray/02': string;
    'Gray/03': string;
    'Gray/04': string;
    'Gray/05': string;
    'Gray/06': string;
    'Gray/07': string;
    'Gray/08': string;
    'Gray/09': string;
    'Gray/10': string;
    'Gray/11': string;
    'Gray/12': string;
    'Gray/13': string;
    'Gray/14': string;
    'Gray/15': string;
    Black10: string;
    Black20: string;
    Black30: string;
    Black40: string;
    Black50: string;
    Black60: string;
    Black70: string;
    Black80: string;
    Black90: string;
    White10: string;
    White20: string;
    White30: string;
    White40: string;
    White50: string;
    White60: string;
    White70: string;
    White80: string;
    White90: string;
    Pindirect_blue: string;
    Pindirect_green: string;
    Pindirect_purple: string;
    'Brand/01': string; // 핑크
    'Brand/02': string; // 분홍
    'Brand/03': string; // 빨강
    'Brand/04': string; // 주황
    'Brand/05': string; // 오렌지
    'Brand/06': string; // 노랑
    'Brand/07': string; // 라임
    'Brand/08': string; // 하늘
    'Brand/09': string; // 연청
    'Brand/10': string; // 진한 하늘
    'Brand/11': string; // 파랑
    'Brand/12': string; // 보라
    'Brand/13': string; // 자주
    'Brand/14': string; // 갈색
    'Brand/15': string; // 진한 갈색
    Pindirect_blue_Pressed: string;
    'Theme/no_name': string;
    'Status/Error': string;
    'Status/Caution': string;
    Kakao: string;
    KakaoPay: string;
    Naver: string;
    NPay: string;
    Line: string;
    Toss: string;
    CoupangEats: string;
    SoldOut: string;
    Interpark: string;
    Triple: string;
    UPlus: string;
    SKT: string;
    Shinsegae: string;
    Baemin: string;
    RoamingPass: string;
    Milk: string;
    KakaoBank: string;
    Alpha_005: string;
    Alpha_010: string;
    Alpha_015: string;
    Alpha_020: string;
    Alpha_025: string;
    Alpha_030: string;
    Alpha_035: string;
    Alpha_040: string;
    Alpha_045: string;
    Alpha_050: string;
    Alpha_055: string;
    Alpha_060: string;
    Alpha_065: string;
    Alpha_070: string;
    Alpha_075: string;
    Alpha_080: string;
    Alpha_085: string;
    Alpha_090: string;
    Alpha_095: string;
  };
  fontSize: {
    Heading1: string;
    Heading2: string;
    Heading3: string;
    Title1: string;
    Title2: string;
    Title3: string;
    Title4: string;
    Body1: string;
    Body2: string;
    Body3: string;
    Body4: string;
    Body5: string;
    Body6: string;
  };
  fontWeight: {
    Bold: string;
    SemiBold: string;
    Medium: string;
    Regular: string;
    Light: string;
  };
  blur: {
    toTop: string;
    toBottom: string;
    toLeft: string;
    toRight: string;
  };
}

export const pindirectThemes: PindirectTheme = {
  color: {
    'APP/Black': '#FF000000',
    'APP/White': '#FFFFFFFF',
    'APP/Dim': '#80000000',
    Black: '#000000',
    White: '#FFFFFF',
    'White/0.6': '#ffffff99',
    'Gray/01': '#F8F8F8',
    'Gray/02': '#F6F6F6',
    'Gray/03': '#F5F5F5',
    'Gray/04': '#EFEFEF',
    'Gray/05': '#ECECEC',
    'Gray/06': '#DFDFDF',
    'Gray/07': '#CECECE',
    'Gray/08': '#C1C1C1',
    'Gray/09': '#A5A5A5',
    'Gray/10': '#8B8B8B',
    'Gray/11': '#6F6F6F',
    'Gray/12': '#3D3D3D',
    'Gray/13': '#333333',
    'Gray/14': '#242424',
    'Gray/15': '#171717',
    Black10: '#0000001a',
    Black20: '#00000033',
    Black30: '#0000004d',
    Black40: '#00000066',
    Black50: '#00000080', // Dimmed Effect Color
    Black60: '#00000099',
    Black70: '#000000b3', // Dimmed Effect Color
    Black80: '#000000cc',
    Black90: '#000000e6',
    White10: '#ffffff1a',
    White20: '#ffffff33',
    White30: '#ffffff4d',
    White40: '#ffffff66',
    White50: '#ffffff80',
    White60: '#ffffff99',
    White70: '#ffffffb3',
    White80: '#ffffffcc',
    White90: '#ffffffe6',
    Pindirect_blue: '#3246FA',
    Pindirect_blue_Pressed: '#232CD2',
    Pindirect_green: '#BEFF32',
    Pindirect_purple: '#8248FF',
    'Brand/01': '#FF70D4', // 핑크
    'Brand/02': '#FF46A0', // 분홍
    'Brand/03': '#FF2929', // 빨강
    'Brand/04': '#FF781E', // 주황
    'Brand/05': '#FFBD24', // 오렌지
    'Brand/06': '#FFED00', // 노랑
    'Brand/07': '#00FE61', // 라임
    'Brand/08': '#01F7E2', // 하늘
    'Brand/09': '#00E1FF', // 연청
    'Brand/10': '#47C2FF', // 진한 하늘
    'Brand/11': '#0032BE', // 파랑
    'Brand/12': '#B74AFF', // 보라
    'Brand/13': '#F058FC', // 자주
    'Brand/14': '#D76E14', // 갈색
    'Brand/15': '#D78C00', // 진한 갈색
    'Theme/no_name': '#F9FF6E',
    'Status/Error': '#FF2929',
    'Status/Caution': '#FF46A0',
    Kakao: '#FEE500',
    KakaoPay: '#FFDF00',
    Naver: '#00C73C',
    NPay: '#00DE5A',
    Line: '#06C755',
    Toss: '#202632',
    CoupangEats: '#935227',
    SoldOut: '#1D1D1B',
    Interpark: '#1769FF',
    Triple: '#0BD0AF',
    UPlus: '#E6007E',
    SKT: '#FF7A00',
    Shinsegae: '#E60000',
    Baemin: '#2AC1BC',
    RoamingPass: '#2814A0',
    Milk: '#19B3B1',
    KakaoBank: '#333B58',
    Alpha_005: '0d',
    Alpha_010: '1a',
    Alpha_015: '26',
    Alpha_020: '33',
    Alpha_025: '40',
    Alpha_030: '4d',
    Alpha_035: '59',
    Alpha_040: '66',
    Alpha_045: '73',
    Alpha_050: '80',
    Alpha_055: '8c',
    Alpha_060: '99',
    Alpha_065: 'a6',
    Alpha_070: 'b3',
    Alpha_075: 'bf',
    Alpha_080: 'cc',
    Alpha_085: 'd9',
    Alpha_090: 'e6',
    Alpha_095: 'f2',
  },
  fontSize: {
    Heading1: 'font-size: 38px; line-height: 46px;',
    Heading2: 'font-size: 34px; line-height: 42px;',
    Heading3: 'font-size: 28px; line-height: 36px;',
    Title1: 'font-size: 24px; line-height: 32px;',
    Title2: 'font-size: 22px; line-height: 30px;',
    Title3: 'font-size: 20px; line-height: 28px;',
    Title4: 'font-size: 18px; line-height: 26px;',
    Body1: 'font-size: 16px; line-height: 22px;',
    Body2: 'font-size: 15px; line-height: 21px;',
    Body3: 'font-size: 14px; line-height: 20px;',
    Body4: 'font-size: 13px; line-height: 19px;',
    Body5: 'font-size: 12px; line-height: 18px;',
    Body6: 'font-size: 10px; line-height: 16px;',
  },
  fontWeight: {
    Bold: 'font-weight: 700;',
    SemiBold: 'font-weight: 600;',
    Medium: 'font-weight: 500;',
    Regular: 'font-weight: 400;',
    Light: 'font-weight: 300;',
  },
  blur: {
    toTop: 'linear-gradient(to top, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));',
    toBottom: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));',
    toLeft: 'linear-gradient(to left, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));',
    toRight: 'linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));',
  },
};
