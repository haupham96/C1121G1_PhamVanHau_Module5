import {RentType} from './rent-type';
import {ServiceType} from './service-type';

export interface Service {
  id?: number;
  area?: string;
  floor?: string;
  maxPeople?: string;
  name?: string;
  otherConvenience?: string;
  poolArea?: string;
  price?: string;
  serviceCode?: string;
  standardRoom?: string;
  rentType?: RentType;
  serviceType?: ServiceType;
  image?: string;
}
