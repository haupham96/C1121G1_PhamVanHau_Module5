package category.service;

import category.model.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ICategoryService {
    void save(Category category);

    Page<Category> findAll(Pageable pageable);

    void deleteById(Integer id);

    Category findById(Integer id);
}
