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

import java.util.List;

public class CategoryWsDTO {

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    private String code;

    public List<CategoryWsDTO> getSubCategories() {
        return subCategories;
    }

    public void setSubCategories(List<CategoryWsDTO> subCategories) {
        this.subCategories = subCategories;
    }

    private List<CategoryWsDTO> subCategories;

    public List<ProductWsDTO> getProducts() {
        return products;
    }

    public void setProducts(List<ProductWsDTO> products) {
        this.products = products;
    }

    private List<ProductWsDTO> products;

}
