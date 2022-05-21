package spring_server.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import spring_server.model.BaiDang;
import spring_server.model.DanhMuc;
import spring_server.repository.IBaiDangRepository;
import spring_server.repository.IDanhMucRepository;
import spring_server.service.IBaiDangService;

import java.util.List;

@Service
public class BaiDangService implements IBaiDangService {

    @Autowired
    IBaiDangRepository baiDangRepository;

    @Autowired
    IDanhMucRepository danhMucRepository;


    @Override
    public List<BaiDang> findAll() {
        return this.baiDangRepository.findAll();
    }

    @Override
    public BaiDang findById(Integer id) {
        return this.baiDangRepository.findById(id).orElse(null);
    }

    @Override
    public void save(BaiDang baiDang) {
        this.baiDangRepository.save(baiDang);
    }

    @Override
    public void deleteById(Integer id) {
        this.baiDangRepository.deleteById(id);
    }

    @Override
    public List<DanhMuc> findAllCategory() {
        return this.danhMucRepository.findAll();
    }

    @Override
    public Page<BaiDang> searchByAll(String dienTich, String gia, String huong, Pageable pageable) {
        return this.baiDangRepository.findAllByDienTichContainingAndGiaContainingAndHuongContaining(dienTich, gia, huong, pageable);
    }
}
