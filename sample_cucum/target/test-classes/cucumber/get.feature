Feature: Server reply Hello World!
  Scenario: Server reply Hello World!
    Given I call GET on /task
    Then the response status is 200
    And the response body must contain message with Hello World!