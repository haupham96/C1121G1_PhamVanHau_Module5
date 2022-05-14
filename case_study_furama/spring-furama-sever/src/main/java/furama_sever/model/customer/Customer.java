package furama_sever.model.customer;

import com.fasterxml.jackson.annotation.JsonBackReference;
import furama_sever.model.contract.Contract;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Getter
@Setter
@Entity
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String customerCode;
    private String name;

    @Column(columnDefinition = "DATE")
    private String birthday;

    @Column(columnDefinition = "BIT(1)")
    private Integer gender;

    private String idCard;
    private String phone;
    private String email;
    private String address;

    @ManyToOne
    @JoinColumn(name = "customer_type_id", referencedColumnName = "id")
    private CustomerType customerType;

    @JsonBackReference
    @OneToMany(mappedBy = "customer")
    private Set<Contract> contracts;

    public Customer() {
    }
}
