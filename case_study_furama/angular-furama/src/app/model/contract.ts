import {Customer} from "./customer";
import {Facilities} from "./facilities";

export interface Contract {
  id?: number;
  startDate?: string;
  endDate?: string;
  totalMoney?: string;
  customer?: Customer;
  employee?: string;
  service?: Facilities;
  deposit?: string;
}
