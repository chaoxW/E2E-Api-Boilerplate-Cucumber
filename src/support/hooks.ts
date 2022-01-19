import { Before, AfterStep, Status } from "@cucumber/cucumber";

// BeforeAll(function () { });

Before({ tags: "@wip" }, function () {
    return "pending";
});

// BeforeStep(function () { });

AfterStep(function (data) {
    if (data.result.status === Status.FAILED && this.response) {
        this.attach(`API response data:\n${JSON.stringify(this.response.data)}`);
    }
});

// After(function (data) { });

// AfterAll(function () { });
