import {Customer} from '../../customer-management/model/customer';
import {Service} from '../../service-management/model/service';
import {Employee} from './employee';


export interface Contract {
  id?: number;
  startDate?: string;
  endDate?: string;
  totalMoney?: string;
  customer?: Customer;
  employee?: Employee;
  service?: Service;
  deposit?: string;
}
