import { ApiRequestParams } from "./ApiRequestParams";

export interface ApiRequestPayload {
    data: Partial<any>
    params?: ApiRequestParams
}