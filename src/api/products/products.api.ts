import { BaseApi42 } from "../../base/baseApi42";
import { ProductsParams } from "./products.params.type";
import { Product } from "./products.types";

export class ProductsApi {
  private base: BaseApi42;

  constructor(base: BaseApi42) {
    this.base = base;
  }

  // GET /v2/products
  /**
   *
   * @param params
   * @returns Return all the products
   */
  public async get_products(params?: ProductsParams): Promise<Product[]> {
    return await this.base.get(`/v2/products`, params);
  }

  // GET /v2/campus/:campus_id/products
  /**
   *
   * @param campus_id
   * @param params
   * @returns Return all the products of the given Campus
   */
  public async get_campus_campusId_products(
    campus_id: string,
    params?: ProductsParams
  ): Promise<Product[]> {
    return await this.base.get(`/v2/campus/${campus_id}/products`, params);
  }

  // GET /v2/products/:id
  /**
   * Get a product
   */
  public async get_products_id(id: string): Promise<Product> {
    return await this.base.get(`/v2/products/${id}`);
  }

  // GET /v2/campus/:campus_id/products/:id
  /**
   *
   * @param id
   * @param campus_id
   * @returns Get a product of the given Id, associated with the given Campus
   */
  public async get_campus_campusId_products_id(
    id: string,
    campus_id?: string
  ): Promise<Product> {
    return await this.base.get(`/v2/campus/${campus_id}/products/${id}`);
  }
}
