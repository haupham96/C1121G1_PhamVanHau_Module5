package furama_sever.model.contract;

import furama_sever.model.customer.Customer;
import furama_sever.model.service.Service;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
public class Contract {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(columnDefinition = "DATE")
    private String startDate;

    @Column(columnDefinition = "DATE")
    private String endDate;

    @ManyToOne
    @JoinColumn(name = "customer_id", referencedColumnName = "id")
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "service_id", referencedColumnName = "id")
    private Service service;

    private String deposit;

    public Contract() {
    }

}
