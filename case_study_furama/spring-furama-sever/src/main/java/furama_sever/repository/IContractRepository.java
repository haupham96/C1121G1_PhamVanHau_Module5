package furama_sever.repository;

import furama_sever.model.contract.Contract;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IContractRepository extends JpaRepository<Contract,Integer> {
}
