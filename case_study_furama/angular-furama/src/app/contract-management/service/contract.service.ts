import {Injectable} from '@angular/core';
import {Employee} from '../model/employee';
import {Customer} from '../../customer-management/model/customer';
import {Service} from '../../service-management/model/service';
import {Contract} from '../model/contract';
import {CustomerService} from '../../customer-management/service/customer.service';
import {ServicesService} from '../../service-management/service/services.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  services: Service[] = [];

  url = 'http://localhost:8080/contract';

  constructor(private customerService: CustomerService, private servicesService: ServicesService, private http: HttpClient) {
  }

  save(contract: Contract): Observable<Contract> {
    return this.http.post(`${this.url}/create`, contract);
  }

  getAllContract(): Observable<any> {
    return this.http.get<any>(`${this.url}`);
  }
}
