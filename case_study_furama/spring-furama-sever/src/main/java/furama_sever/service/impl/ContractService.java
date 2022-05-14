package furama_sever.service.impl;

import furama_sever.model.contract.Contract;
import furama_sever.repository.IContractRepository;
import furama_sever.service.IContractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ContractService implements IContractService {
    @Autowired
    private IContractRepository contractRepository;

    @Override
    public Page<Contract> findAll(Pageable pageable) {
        return this.contractRepository.findAll(pageable);
    }

    @Override
    public Contract findById(Integer id) {
        return this.contractRepository.findById(id).orElse(null);
    }

    @Override
    public void save(Contract contract) {
        this.contractRepository.save(contract);
    }

    @Override
    public void deleteById(Integer id) {
        this.contractRepository.deleteById(id);
    }
}
