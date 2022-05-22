package spring_server.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;
import spring_server.model.DanhMuc;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Getter
@Setter
public class BaiDangDTO implements Validator {

    private Integer id;

    private String vungMien;

    private DanhMuc danhMuc;

    private String banLa;
    private String banDangTin;
    private String tinhTrang;
    private String diaChi;

    @Pattern(regexp = "^(([0]*[1-9][0-9]*)|[1-9][0-9]*)$", message = "Must be a number")
    private String dienTich;

    private String huong;
    private String tuaDe;
    private String noiDung;

    @Pattern(regexp = "^(([0]*[1-9][0-9]*)|[1-9][0-9]*)$", message = "Must be a number")
    private String gia;

    private String ngayDang;

    public BaiDangDTO() {
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {
        final String REG_INT = "^(([0]*[1-9][0-9]*)|[1-9][0-9]*)$";
        BaiDangDTO baiDangDTO = (BaiDangDTO) target;
        if (ngayDang.length() > 200) {
            errors.rejectValue("ngayDang", "", "Max characters : 200");
        }

        if (dienTich.matches(REG_INT)) {
            int intDienTich = Integer.parseInt(baiDangDTO.dienTich);
            if (intDienTich < 20) {
                errors.rejectValue("dienTich", "", "Area must > 20");
            }
        }

        if (gia.matches(REG_INT)) {
            int intGia = Integer.parseInt(baiDangDTO.gia);
            if (intGia <= 100000000) {
                errors.rejectValue("gia", "", "Price must > 100,000,000 VND");
            }
        }

    }
}
