/*********************************************************************
 * The Initial Developer of the content of this file is NETCONOMY.
 * All portions of the code written by NETCONOMY are property of
 * NETCONOMY. All Rights Reserved.
 *
 * NETCONOMY Software & Consulting GmbH
 * Hilmgasse 4, A-8010 Graz (Austria)
 * FN 204360 f, Landesgericht fuer ZRS Graz
 * Tel: +43 (316) 815 544
 * Fax: +43 (316) 815544-99
 * www.netconomy.net
 *
 * (c) 2020 by NETCONOMY Software & Consulting GmbH
 *********************************************************************/

package com.example.demo;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class CategoriesFacade {

    public List<CategoryWsDTO> getCategories() {
        ProductWsDTO productWsDTO1 = new ProductWsDTO();
        productWsDTO1.setCode("product1");
        ProductWsDTO productWsDTO2 = new ProductWsDTO();
        productWsDTO2.setCode("product2");
        ProductWsDTO productWsDTO3 = new ProductWsDTO();
        productWsDTO3.setCode("product3");
        ProductWsDTO productWsDTO4 = new ProductWsDTO();
        productWsDTO4.setCode("product4");
        ProductWsDTO productWsDTO5 = new ProductWsDTO();
        productWsDTO5.setCode("product5");

        CategoryWsDTO subcategory1 = new CategoryWsDTO();
        subcategory1.setCode("subcategory1");
        subcategory1.setProducts(Arrays.asList(productWsDTO1, productWsDTO2));
        CategoryWsDTO subcategory2 = new CategoryWsDTO();
        subcategory2.setCode("subcategory2");
        subcategory2.setProducts(Arrays.asList(productWsDTO1, productWsDTO5));

        CategoryWsDTO subcategory3 = new CategoryWsDTO();
        subcategory3.setCode("subcategory3");
        subcategory3.setProducts(Arrays.asList(productWsDTO1, productWsDTO4));

        CategoryWsDTO subcategory4 = new CategoryWsDTO();
        subcategory4.setCode("subcategory4");
        CategoryWsDTO categoryWsDTO1 = new CategoryWsDTO();
        categoryWsDTO1.setCode("televizori");
        CategoryWsDTO categoryWsDTO2 = new CategoryWsDTO();
        categoryWsDTO2.setCode("monitori");
        CategoryWsDTO categoryWsDTO3 = new CategoryWsDTO();
        categoryWsDTO3.setCode("automobili");
        CategoryWsDTO categoryWsDTO4 = new CategoryWsDTO();
        categoryWsDTO4.setCode("motocikli");
        CategoryWsDTO categoryWsDTO5 = new CategoryWsDTO();
        categoryWsDTO5.setCode("stampaci");
        categoryWsDTO5.setProducts(Arrays.asList(productWsDTO3, productWsDTO4, productWsDTO5));
        List<CategoryWsDTO> subCategories1 = new ArrayList<>();
        subCategories1.add(subcategory1);
        subCategories1.add(subcategory2);
        categoryWsDTO1.setSubCategories(subCategories1);
        List<CategoryWsDTO> subCategories2= new ArrayList<>();
        subCategories2.add(subcategory3);
        subCategories2.add(subcategory4);
        categoryWsDTO2.setSubCategories(subCategories2);
        List<CategoryWsDTO> categoryWsDTOS = new ArrayList<>();
        categoryWsDTOS.add(categoryWsDTO1);
        categoryWsDTOS.add(categoryWsDTO2);
        categoryWsDTOS.add(categoryWsDTO3);
        categoryWsDTOS.add(categoryWsDTO4);
        categoryWsDTOS.add(categoryWsDTO5);
        return categoryWsDTOS;
    }

    public void setCategories(List<CategoryWsDTO> categories) {
        this.categories = categories;
    }

    List<CategoryWsDTO> categories;

}
