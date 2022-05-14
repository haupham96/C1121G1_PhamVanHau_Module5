package furama_sever.repository;

import furama_sever.model.customer.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICustomerRepository extends JpaRepository<Customer, Integer> {
}
