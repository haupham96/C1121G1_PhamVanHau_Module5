package furama_sever.controller;


import furama_sever.model.service.Service;
import furama_sever.service.IServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/service")
public class ServiceRestController {

    @Autowired
    private IServiceService serviceService;

    @GetMapping("")
    public ResponseEntity<List<Service>> listServices(Pageable pageable) {
        Page<Service> services = this.serviceService.findAll(pageable);
        return new ResponseEntity<>(services.toList(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Service> findById(@PathVariable Integer id) {
        Service service = this.serviceService.findById(id);
        if (service == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(service, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<Void> createService(@RequestBody Service service) {
        this.serviceService.save(service);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<Void> editService(@RequestBody Service service, @PathVariable Integer id) {
        if (this.serviceService.findById(id) == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        this.serviceService.save(service);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteService(@PathVariable Integer id) {
        if (this.serviceService.findById(id) == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        this.serviceService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
