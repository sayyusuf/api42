import { BaseApi42 } from "../../base/baseApi42";
import { CorrectionPointHistoricsParams } from "./correctionpointhistorics.params.type";

export class CorrectionPointHistoricsApi {
    private base: BaseApi42;

    constructor(base: BaseApi42) {
        this.base = base;
    }

    /**
     * api: `GET /v2/users/:user_id/correction_point_historics`
     * @param user_id string | number
     * @returns CorrectionPointHistoric array
     */
    public async get_users_userId_correctionPointHistorics(user_id: number | string, params: CorrectionPointHistoricsParams): Promise<any[]> {
        const route = `/v2/users/${user_id}/correction_point_historics`;
        return await this.base.get(route, params);
    }
}