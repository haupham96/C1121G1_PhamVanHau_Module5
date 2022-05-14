import {Customer} from '../../customer-management/model/customer';
import {Service} from '../../service-management/model/service';

export interface Contract {
  id?: number;
  startDate?: string;
  endDate?: string;
  totalMoney?: string;
  customer?: Customer;
  service?: Service;
  deposit?: string;
}
