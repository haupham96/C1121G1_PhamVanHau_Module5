package spring_server.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
public class BaiDang {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String vungMien;

    @ManyToOne
    @JoinColumn(name = "danh_muc_id", referencedColumnName = "id")
    private DanhMuc danhMuc;

    private String banLa;
    private String banDangTin;
    private String tinhTrang;
    private String diaChi;
    private String dienTich;
    private String huong;
    private String tuaDe;

    @Column(columnDefinition = "LONGTEXT")
    private String noiDung;

    @Column(columnDefinition = "INT")
    private String gia;
    private String ngayDang;

    public BaiDang() {
    }

}
