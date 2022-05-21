package spring_server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import spring_server.model.DanhMuc;

public interface IDanhMucRepository extends JpaRepository<DanhMuc,Integer> {

}
