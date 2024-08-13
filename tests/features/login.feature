Feature: Login

  Scenario: Successful login
    Given I have login with the right credentials
    Then I see the product list page

  Scenario Outline: Unsuccessful login
    Given I have login with the username "<username>" and password "<password>"
    Then I see error message "<message>"

  Examples: 
    | username | password | message |
    | standard_user | secret-sauce | Epic sadface: Username and password do not match any user in this service |
    | standard-user | secret_sauce | Epic sadface: Username and password do not match any user in this service |
    | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out. |
