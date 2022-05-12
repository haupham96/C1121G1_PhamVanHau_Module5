package category.controller;

import category.model.Category;
import category.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/categories")
public class CategoryRestController {

    @Autowired
    ICategoryService iCategoryService;

    @PostMapping("/create")
    public ResponseEntity<Void> createCategory(@RequestBody Category category) {
        this.iCategoryService.save(category);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("")
    public ResponseEntity<List<Category>> pageCategory(Pageable pageable) {
        List<Category> categories = this.iCategoryService.findAll(pageable).toList();
        return new ResponseEntity<>(categories, HttpStatus.OK);
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<Void> editCategory(@RequestBody Category category, @PathVariable Integer id) {
        category.setId(id);
        this.iCategoryService.save(category);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Integer id) {
        this.iCategoryService.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Category> findById(@PathVariable Integer id) {
        Category category = this.iCategoryService.findById(id);
        return new ResponseEntity<Category>(category, HttpStatus.OK);
    }

}
