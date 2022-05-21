package spring_server.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Getter
@Setter
@Entity
public class DanhMuc {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String ten ;

    @JsonBackReference
    @OneToMany(mappedBy = "danhMuc")
    private Set<BaiDang> baiDangs ;


    public DanhMuc() {
    }
}
