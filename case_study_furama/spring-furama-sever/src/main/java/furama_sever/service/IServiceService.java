package furama_sever.service;

import furama_sever.model.service.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface IServiceService {
    Page<Service> findAll(Pageable pageable);

    Service findById(Integer id);

    void save(Service service);

    void deleteById(Integer id);
}
