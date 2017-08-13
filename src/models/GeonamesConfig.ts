import { GeonamesFormat } from './GeonamesFormat';
import axios, { AxiosInstance} from 'axios';

export interface GeonamesConfig {
    username: string;
    secure?: boolean;
    lang?: string;
    encoding?: GeonamesFormat;
    style?: string;
    formatted?: string;
    axiosInstance?: AxiosInstance;
}