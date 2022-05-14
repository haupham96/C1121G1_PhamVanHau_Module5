package furama_sever.service.impl;

import furama_sever.repository.IServiceRepository;
import furama_sever.service.IServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ServiceService implements IServiceService {
    @Autowired
    private IServiceRepository serviceRepository;

    @Override
    public Page<furama_sever.model.service.Service> findAll(Pageable pageable) {
        return this.serviceRepository.findAll(pageable);
    }

    @Override
    public furama_sever.model.service.Service findById(Integer id) {
        return this.serviceRepository.findById(id).orElse(null);
    }

    @Override
    public void save(furama_sever.model.service.Service service) {
        this.serviceRepository.save(service);
    }

    @Override
    public void deleteById(Integer id) {
        this.serviceRepository.deleteById(id);
    }
}
