import axios from "axios";
import { AxiosInstance, AxiosResponse } from "axios";
import { api } from "properties";

export class ApiClient {
    private client: AxiosInstance;

    constructor(headers: Record<string, string> = {}) {
        this.client = axios.create({
            baseURL: api.baseUrl + api.version,
            headers: headers,
            validateStatus: null,
        });
    }

    public getMissions(): Promise<AxiosResponse<any, any>> {
        return this.client.get("missions");
    }

    public getMission(id: string): Promise<AxiosResponse<any, any>> {
        return this.client.get(`missions/${id}`);
    }

    public createMission(body: Record<string, unknown>): boolean {
        //wip
        return true;
    }

    public createMissionFromTemplate(file: string): boolean {
        const body = require(`support/templates/${file}`).body;
        //wip
        return true;
    }
}
