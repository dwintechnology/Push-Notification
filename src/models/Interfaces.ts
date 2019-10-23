export enum EErrorCode {
  EMAIL_EXISTS = 100,
  CRYPT_FAILED = 101,
  FAILED_CREATE_USER_ON_DB = 102,
  MAIL_NOT_FOUND = 103,
  FAILED_TO_COMPARE = 104,
  INCORRECT_PASSWORD = 105,
  FAILED_TO_DELETE_USER = 106,
  FAILED_TO_CREATE_RESET_TOKEN = 107,
  RESET_TOKEN_NOT_FOUND = 108,
  EMAIL_BLOCKED = 119,
  EMAIL_DOES_NOT_APPROVED = 120,
  INVALID_BOOKING_KEY = 121,
  INTERNAL_ERROR = 122,

  NOT_EXISTING_UID = 123,
  SUBSCRIPTIONS_NOT_FOUND = 124,
  FAILED_TO_UPDATE_STATUSES = 125,
  INVALID_TOKEN = 126
}

export interface IError {
  status_code: number;
  body: {
    code?: number,
    message?: string,
  };
}

export interface IResponse {
  status: number;
  err?: any;
  data: any;
}

export interface ISubscription {
  id?: number;
  uid?: string;
  created_at?: Date;
  cpu?: string;
  available_resolution?: string;
  user_timezone?: string;
  user_language?: string;
  ip_address?: string;
  continent_code?: EContinentCode,
  continent_name?: string;
  country_code?: string;
  country_name?: string;
  calling_code?: string;
  is_eu?: boolean;
  languages?: ILanguage[];
  user_status?: ESubscriptionStatus;
  endpoint?: string;
  expiration_time?: Date;
  keys_auth?: string;
  keys_256?: string;
  firebase_token?: string;
}

export interface ILanguage {
  code: string;
  name: string;
  native: string;
}

export enum EContinentCode {
  AF = 'AF',
  AS = 'AS',
  EU = 'EU',
  NA = 'NA',
  OC = 'OC',
  SA = 'SA',
  AN = 'AN'
}

export interface INotificationPayload {
  title: string,
  message: string,
  url: string,
  tag: string,
  data: string
}

export enum INotificationType {
  firebase = 'firebase',
  web = 'web'
}

export enum ESubscriptionStatus {
  online = 'online',
  offline = 'offline',
}

export enum EPushStatus {
  success = 'success',
  failed = 'failed',
}

export interface IIpStackResponse {
  ip: string;
  type: 'ipv4' | 'ipv6',
  continent_code: EContinentCode,
  zip: string,
  latitude: number,
  longitude: number,
  location:
  {
    geoname_id: number,
    capital: string,
    languages: ILanguage[],
    country_flag: string,
    country_flag_emoji: string,
    country_flag_emoji_unicode: string,
    calling_code: string,
    is_eu: boolean
  }
}

export interface IBroadcastConfig {
  id?: number,
  title: string,
  message: string,
  delay_sec: number,
  repeat_min: number
}