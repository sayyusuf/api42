import { BaseApi42 } from "../../base/baseApi42";

export class ProductsApi {
  private base: BaseApi42;

  constructor(base: BaseApi42) {
    this.base = base;
  }

  // GET /v2/products
  /**
   * Return all the products
   */
  public async get_products(sort?: string, filter?: string, range?: string) {
    return await this.base.get(`/v2/products`);
  }

  // GET /v2/campus/:campus_id/products
  /**
   * Return all the products of the given Campus
   */
  public async get_campus_campusId_products(
    campus_id: string,
    sort?: string,
    filter?: string,
    range?: string
  ) {
    return await this.base.get(`/v2/campus/${campus_id}/products`);
  }

  // GET /v2/products/:id
  /**
   * Get a product
   */
  public async get_products_id(id: string) {
    return await this.base.get(`/v2/products/${id}`);
  }

  // GET /v2/campus/:campus_id/products/:id
  /**
   * Get a product of the given Id, associated with the given Campus
   */
  public async get_campus_campusId_products_id(id: string) {
    return await this.base.get(`/v2/campus/:campus_id/products/${id}`);
  }
}
