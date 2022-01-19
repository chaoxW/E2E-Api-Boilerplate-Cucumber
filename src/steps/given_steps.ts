import { Given, DataTable } from "@cucumber/cucumber";

Given(/^I set the headers as:$/, function (table: DataTable) {
    this.headers = {};
    table.hashes().forEach((row) => {
        this.headers[row["header"]] = row["value"];
    });
});
