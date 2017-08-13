import { GeonamesFormat } from './GeonamesFormat';
import axios, { AxiosInstance} from 'axios';

export type Style = 'SHORT' | 'MEDIUM' | 'LONG' | 'FULL';

export interface GeonamesConfig {
    username: string;
    secure?: boolean;
    lang?: string;
    encoding?: GeonamesFormat;
    style?: Style;
    formatted?: boolean;
    axiosInstance?: AxiosInstance;
}