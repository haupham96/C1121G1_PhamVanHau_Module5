import {CustomerType} from './customer-type';

export interface Customer {
  id?: number;
  customerCode?: string;
  name?: string;
  birthday?: string;
  gender?: number;
  idCard?: string;
  phone?: string;
  email?: string;
  address?: string;
  customerType?: CustomerType;
}
