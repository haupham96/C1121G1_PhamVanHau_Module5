package furama_sever.controller;

import furama_sever.model.contract.Contract;
import furama_sever.model.customer.Customer;
import furama_sever.service.IContractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@CrossOrigin("*")
@RequestMapping("/contract")
public class ContractRestController {
    @Autowired
    private IContractService contractService;

    @GetMapping("")
    public ResponseEntity<List<Contract>> listContract(Pageable pageable) {
        Page<Contract> contracts = this.contractService.findAll(pageable);
        return new ResponseEntity<>(contracts.toList(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Contract> findById(@PathVariable Integer id) {
        Contract contract = this.contractService.findById(id);
        if (contract == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(contract, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<Void> createContract(@RequestBody Contract contract) {
        this.contractService.save(contract);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<Void> editContract(@PathVariable Integer id, @RequestBody Contract contract) {
        if (this.contractService.findById(id) == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        this.contractService.save(contract);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteContract(@PathVariable Integer id) {
        if (this.contractService.findById(id) == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        this.contractService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
