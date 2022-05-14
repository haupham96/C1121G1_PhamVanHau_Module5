package furama_sever.service;

import furama_sever.model.customer.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ICustomerService {
    Page<Customer> findAll(Pageable pageable);

    Customer findById(Integer id);

    void save(Customer customer);

    void deleteById(Integer id);
}
