import { TRootState } from '@redux/store';

export const getAuthorization = (state: TRootState) => state.authorization.idInstance;
export const getApiTokenInstance = (state: TRootState) => state.authorization.apiTokenInstance;
export const getpPhoneNumber = (state: TRootState) => state.authorization.phoneNumber;
export const getMessages = (state: TRootState) => state.messages.messages;
