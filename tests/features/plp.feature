Feature: Product List Page

  Background:
    Given I have login with the right credentials

  Scenario: Add product to the basket through the PLP
    Given I have added 1 products to the PLP
    Then I see the number on '1' on the shopping cart badge

  Scenario: Add product to the basket through the PLP
    Given I have added 2 products to the PLP
    And I remove a product from the basket
    Then I see the number on '1' on the shopping cart badge
