package spring_server.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import spring_server.model.BaiDang;
import spring_server.model.DanhMuc;

import java.util.List;

public interface IBaiDangService {
    List<BaiDang> findAll();

    BaiDang findById(Integer id);

    void save(BaiDang baiDang);

    void deleteById(Integer id);

    List<DanhMuc> findAllCategory();

    Page<BaiDang> searchByAll(String dienTich, String gia, String huong, Pageable pageable);
}
