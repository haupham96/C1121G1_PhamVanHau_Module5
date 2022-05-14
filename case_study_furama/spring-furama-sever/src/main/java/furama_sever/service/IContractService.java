package furama_sever.service;

import furama_sever.model.contract.Contract;
import furama_sever.model.customer.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IContractService {
    Page<Contract> findAll(Pageable pageable);

    Contract findById(Integer id);

    void save(Contract contract);

    void deleteById(Integer id);

}
