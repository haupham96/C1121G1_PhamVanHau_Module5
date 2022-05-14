package furama_sever.model.service;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Getter
@Setter
@Entity
public class RentType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id ;
    private String name ;

    @JsonBackReference
    @OneToMany(mappedBy = "rentType")
    private Set<Service> services ;

    public RentType() {
    }
}
