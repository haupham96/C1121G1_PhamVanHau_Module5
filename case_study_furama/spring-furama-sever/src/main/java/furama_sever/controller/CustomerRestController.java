package furama_sever.controller;

import furama_sever.model.customer.Customer;
import furama_sever.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/customer")
public class CustomerRestController {

    @Autowired
    private ICustomerService customerService;

    @GetMapping("")
    public ResponseEntity<Page<Customer>> listCustomer(@PageableDefault(value = 1) Pageable pageable) {
        Page<Customer> customers = this.customerService.findAll(pageable);
        return new ResponseEntity<>(customers, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Customer> findById(@PathVariable Integer id) {
        Customer customer = this.customerService.findById(id);
        if (customer == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(customer, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<Void> createCustomer(@RequestBody Customer customer) {
        this.customerService.save(customer);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<Void> editCustomer(@PathVariable Integer id, @RequestBody Customer customer) {
        if (this.customerService.findById(id) == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        this.customerService.save(customer);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteCustomer(@PathVariable Integer id) {
        if (this.customerService.findById(id) == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        this.customerService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
