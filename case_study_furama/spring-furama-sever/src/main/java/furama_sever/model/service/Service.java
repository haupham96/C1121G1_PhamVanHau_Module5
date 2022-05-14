package furama_sever.model.service;

import com.fasterxml.jackson.annotation.JsonBackReference;
import furama_sever.model.contract.Contract;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Getter
@Setter
@Entity
public class Service {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String area;
    private String floor;
    private String maxPeople;
    private String name;
    private String otherConvenience;
    private String poolArea;
    private String price;
    private String serviceCode;
    private String standardRoom;

    @ManyToOne
    @JoinColumn(name = "rent_type_id", referencedColumnName = "id")
    private RentType rentType;

    @ManyToOne
    @JoinColumn(name = "service_type_id", referencedColumnName = "id")
    private ServiceType serviceType;

    @JsonBackReference
    @OneToMany(mappedBy = "service")
    private Set<Contract> contracts;

    public Service() {
    }

}
