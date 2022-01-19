import { When } from "@cucumber/cucumber";
import { ApiClient } from "support/axios/api.client";

When(/^I send a request to GET all missions$/, async function () {
    const request = new ApiClient();
    this.response = await request.getMissions();
});

When(/^I send a request to GET the mission with the ID "(.*)"$/, async function (id: string) {
    const request = new ApiClient();
    this.response = await request.getMission(id);
});

When(/^I send a request to POST a new mission with the following body:$/, async function (body: Record<string, any>) {
    const request = new ApiClient(this.headers);
    this.response = await request.createMission(body);
});

When(/^I send a request to POST a new mission with the body from "(.*)" template$/, async function (file: string) {
    const request = new ApiClient(this.headers);
    this.response = await request.createMissionFromTemplate(file);
});
