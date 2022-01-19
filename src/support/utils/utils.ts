import { expect } from "chai";
import type { DataTableCheck } from "types/index";
import { DataType } from "enums/global";

export class Utils {
    public static checkApiDataResponse(dataFromApi: any, dataExpected: Array<DataTableCheck>): void {
        for (const row of dataExpected) {
            const valueFromApi = this.getFinalValue(dataFromApi, row.property);

            // (row.rule === "is") will have a row.value empty
            if (row.type && row.rule !== "is") {
                row.value = this.convertExpectedValue(row.type, String(row.value));
            }

            switch (row.rule) {
                case "match":
                    if (typeof row.value === "string") {
                        expect(valueFromApi).to.match(new RegExp(row.value),
                            `\nProperty with issue: '${row.property}'`);
                    } else {
                        throw new Error(`'${row.value}' with invalid type.`)
                    }
                    break;
                case "equal":
                    expect(valueFromApi).to.be.equal(row.value,
                        `\nProperty with issue: '${row.property}'`);
                    break;
                case "is":
                    expect(valueFromApi).is.a(String(row.type),
                        `\nProperty with issue: '${row.property}'`);
                    break;
                default:
                    throw new Error(`Unknown rule: '${row.rule}'`);
            }
        }
    }

    /**
     * Gets the final value of the path
     * @param data 
     * @param path 
     * @returns the final value
     */
    private static getFinalValue(data: any, path: string): any {
        let value = data;

        for (const subPath of path.split(".")) {
            const regex = new RegExp("(.*)\\[(\\d+)\\]");
            //Is property an Array?
            const res = regex.exec(subPath);

            if (res !== null) {
                value = value[res[1]];
                value = value[parseInt(res[2])];
            } else {
                value = value[subPath];
            }
        }

        return value;
    }

    /**
     * Converts the expected value to the intended type
     * @param type 
     * @param value 
     * @returns value
     */
    private static convertExpectedValue(type: string, value: string): any {
        switch (type.toLowerCase()) {
            case DataType.boolean:
                return (value === "true") ? true : false;
            case DataType.int:
                return parseInt(value);
            case DataType.float:
                return parseFloat(value);
        }
        return value;
    }
}
