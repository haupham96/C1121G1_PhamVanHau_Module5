package spring_server.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import spring_server.model.BaiDang;
import spring_server.model.DanhMuc;
import spring_server.service.IBaiDangService;

import java.util.List;


@RestController
@CrossOrigin("*")
public class BaiDangRestController {

    @Autowired
    IBaiDangService baiDangService;

    @GetMapping("/list")
    public ResponseEntity<Page<BaiDang>> listBaiDang(@RequestParam(required = false, defaultValue = "") String dienTich,
                                                     @RequestParam(required = false, defaultValue = "") String gia,
                                                     @RequestParam(required = false, defaultValue = "") String huong,
                                                     Pageable pageable) {
        Sort sort = Sort.by("gia").ascending().and(Sort.by("dienTich").ascending());
        Page<BaiDang> baiDangs = this.baiDangService.searchByAll(dienTich, gia, huong, PageRequest.of(pageable.getPageNumber(), 5, sort));
        return new ResponseEntity<>(baiDangs, HttpStatus.OK);
    }

    @GetMapping("/category")
    public ResponseEntity<List<DanhMuc>> listDanhMuc() {
        List<DanhMuc> list = this.baiDangService.findAllCategory();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @GetMapping("/list/{id}")
    public ResponseEntity<BaiDang> findById(@PathVariable Integer id) {
        BaiDang baiDang = this.baiDangService.findById(id);
        if (baiDang == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(baiDang, HttpStatus.OK);
    }

    @PostMapping("/list")
    public ResponseEntity<Void> createBaiDang(@RequestBody BaiDang baiDang) {
        this.baiDangService.save(baiDang);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/list/{id}")
    public ResponseEntity<Void> editBaiDang(@PathVariable Integer id, @RequestBody BaiDang baiDang) {
        if (this.baiDangService.findById(id) == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        this.baiDangService.save(baiDang);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/list/{id}")
    public ResponseEntity<Void> deleteBaiDang(@PathVariable Integer id) {
        if (this.baiDangService.findById(id) == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        this.baiDangService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
