import { Then, DataTable } from "@cucumber/cucumber";
import { expect } from "chai";
import { Utils } from "support/utils/utils";

Then(/^I expect the last response status to be "(\d+)"$/, function (code: number) {
    expect(this.response.status).to.be.equal(code);
});

Then(/^I expect the last response to have a JSON body matching the following rules:$/, function (table: DataTable) {
    /**
     * DataTable example:
     * | property | rule  | type | value |
     * | version  | equal | int  | 0     |
     */
    Utils.checkApiDataResponse(this.response.data, table.hashes());
});
