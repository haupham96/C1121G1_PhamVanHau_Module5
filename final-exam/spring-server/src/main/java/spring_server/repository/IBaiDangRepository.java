package spring_server.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import spring_server.model.BaiDang;

public interface IBaiDangRepository extends JpaRepository<BaiDang, Integer> {

    Page<BaiDang> findAllByDienTichContainingAndGiaContainingAndHuongContaining(String dienTich, String gia, String huong, Pageable pageable);
}
