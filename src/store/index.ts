import {profile, ProfileType} from './profile';
import {time, TimeType} from './time';
import {appInfo, AppInfoType} from './appInfo';

export interface Store {
  profile: ProfileType;
  time: TimeType;
  appInfo: AppInfoType;
}

export const store = {
  profile,
  time,
  appInfo,
};
