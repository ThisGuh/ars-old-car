export const APP_NAME = 'Ars Old Car';
export const APP_AUTHOR = 'Damian Głuch';
export const APP_DESC =
  'Nieoczywiste muzeum, rodzinne miejsce miłośników motoryzacji, w niebanalny sposób ukazujący świat odchodzącej historii pojazdów, które możemy oglądać praktycznie już tylko w takich miejscach';

export const NAV_ITEMS = [
  'Aktualności',
  'Galeria',
  '#LUBIE2CV',
  'Rezerwacje',
  'W okolicy',
  'Kontakt',
];

export const MAIL = 'kontakt@arsoldcar.pl';
export const PHONE = '515 355 533';

export const LATITUDE =
  process.env.NODE_ENV === 'production' ? 50.7479 : 50.8904;
export const LONGITUDE =
  process.env.NODE_ENV === 'production' ? 20.4697 : 20.6278;
