Feature: shipping
  Scenario: visiting the frontpage
    Given I visit store
    When I add a product to basket
    Then Sum in basket is correct
