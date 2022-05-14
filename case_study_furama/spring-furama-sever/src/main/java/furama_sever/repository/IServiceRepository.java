package furama_sever.repository;

import furama_sever.model.service.Service;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IServiceRepository extends JpaRepository<Service,Integer> {
}
