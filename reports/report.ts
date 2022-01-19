import { generate } from 'multiple-cucumber-html-reporter';
import { removeSync } from 'fs-extra';

const folder = "reports/html";

//Remove old files
removeSync(folder);

//Generate new report
generate({
    jsonDir: "reports/json",
    reportPath: folder,
    displayDuration: true,
    pageTitle: "Report",
    reportName: "Tests Report",
    customMetadata: true,
    metadata: [
        { name: 'Environment', value: 'beta' }
    ]
    // for more options see https://github.com/wswebcreation/multiple-cucumber-html-reporter#options
});