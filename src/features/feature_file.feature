Feature: Test feature
    This is the feature description.
    It test interactions with the api

    @smoke-test
    Scenario: Get all missions
        This is a scenario description

        When I send a request to GET all missions
        Then I expect the last response status to be "200"

    Scenario: Get one mission
        This is a scenario description

        When I send a request to GET the mission with the ID "9D1B7E0"
        Then I expect the last response status to be "200"
        And I expect the last response to have a JSON body matching the following rules:
            | property      | rule  | type   | value   |
            | mission_id    | equal | string | 9D1B7E0 |
            | manufacturers | is    | array  |         |

        When I send a request to GET the mission with the ID "999999"
        Then I expect the last response status to be "404"

    @wip
    Scenario: Create one mission
        This is a scenario description

        Given I set the headers as:
            | header       | value |
            | Content-Type | json  |
        When I send a request to POST a new mission with the following body:
            """
            {
                "mission_name": "Thaicom",
                "mission_id": "9D1B7E0",
                "manufacturers": [
                    "Orbital ATK"
                ],
                "payload_ids": [
                    "Thaicom 6",
                    "Thaicom 8"
                ],
                "wikipedia": "https://en.wikipedia.org/wiki/Thaicom",
                "website": "http://www.thaicom.net/en/satellites/overview",
                "twitter": "https://twitter.com/thaicomplc",
                "description": "Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology."
            }
            """

    @wip
    Scenario: Create another mission
        This is a scenario description

        Given I set the headers as:
            | header       | value |
            | Content-Type | json  |
        When I send a request to POST a new mission with the body from "body.template" template
