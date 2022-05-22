package spring_server.controller;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import spring_server.dto.BaiDangDTO;
import spring_server.model.BaiDang;
import spring_server.model.DanhMuc;
import spring_server.service.IBaiDangService;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;


@RestController
@CrossOrigin("*")
public class BaiDangRestController {

    @Autowired
    IBaiDangService baiDangService;

    @GetMapping("/list")
    public ResponseEntity<Page<BaiDang>> listBaiDang(@RequestParam(required = false, defaultValue = "") String dienTich,
                                                     @RequestParam(required = false, defaultValue = "") String gia,
                                                     @RequestParam(required = false, defaultValue = "") String huong,
                                                     @RequestParam(required = false) String sortSelect,
                                                     Pageable pageable) {
        Sort sort = Sort.by("ngayDang").descending();
        if (sortSelect.equals("DESC")) {
            sort = Sort.by("gia").descending();
        } else if (sortSelect.equals("ASC")) {
            sort = Sort.by("gia").ascending();
        }

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
    public ResponseEntity<Map<String, String>> createBaiDang(@Valid @RequestBody BaiDangDTO baiDangDTO, BindingResult bindingResult) {
        Map<String, String> mapErrors = null;

        baiDangDTO.validate(baiDangDTO, bindingResult);

        if (bindingResult.hasFieldErrors()) {
            mapErrors = bindingResult.getFieldErrors().stream().collect(Collectors.toMap(e -> e.getField(), e -> e.getDefaultMessage()));
            return new ResponseEntity<>(mapErrors, HttpStatus.BAD_REQUEST);
        }
        BaiDang baiDang = new BaiDang();
        DanhMuc danhMuc = new DanhMuc();

        BeanUtils.copyProperties(baiDangDTO.getDanhMuc(), danhMuc);
        BeanUtils.copyProperties(baiDangDTO, baiDang);
        baiDang.setDanhMuc(danhMuc);

        this.baiDangService.save(baiDang);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/list/{id}")
    public ResponseEntity<Map<String, String>> editBaiDang(@PathVariable Integer id, @Valid @RequestBody BaiDangDTO baiDangDTO, BindingResult bindingResult) {
        Map<String, String> mapErr = null;

        if (this.baiDangService.findById(id) == null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        baiDangDTO.validate(baiDangDTO, bindingResult);
        if (bindingResult.hasErrors()) {
            mapErr = bindingResult.getFieldErrors().stream().collect(Collectors.toMap(e -> e.getField(), e -> e.getDefaultMessage()));
            return new ResponseEntity<>(mapErr, HttpStatus.BAD_REQUEST);
        }

        BaiDang baiDang = new BaiDang();
        DanhMuc danhMuc = new DanhMuc();

        BeanUtils.copyProperties(baiDangDTO, baiDang);
        BeanUtils.copyProperties(baiDangDTO.getDanhMuc(), danhMuc);

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
