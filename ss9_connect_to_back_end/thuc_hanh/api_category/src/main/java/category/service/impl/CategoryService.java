package category.service.impl;

import category.model.Category;
import category.repository.ICategoryRepository;
import category.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class CategoryService implements ICategoryService {

    @Autowired
    private ICategoryRepository iCategoryRepository;

    @Override
    public void save(Category category) {
        this.iCategoryRepository.save(category);
    }

    @Override
    public Page<Category> findAll(Pageable pageable) {
        return this.iCategoryRepository.findAll(pageable);
    }

    @Override
    public void deleteById(Integer id) {
        this.iCategoryRepository.deleteById(id);
    }

    @Override
    public Category findById(Integer id) {
        return this.iCategoryRepository.findById(id).orElse(null);
    }
}
