/// <reference types="cypress" />
/*global cy*/

describe("check add item", () => {
  it("should add new task", () => {
    cy.visit('http://localhost:3000/')
    cy.get(".button").click()
    cy.get(".TaskTitle").type("hallo")
    cy.get(".TaskText").type("this is a test")
    cy.get(".saveButton").click()

    cy.get("ul >:last .Title > span").should('have.text', "hallo")
    cy.get("ul >:last .descriptionText > p").should('have.text', "this is a test")
  })
  it("should edit task", () => {
    cy.get('ul > :first .EditButton > svg').click()
    cy.get(".colorWrapper").click()
    cy.get(".red").click()
    cy.get(".slider").click()
    cy.get(".saveButton").click()
    cy.get('ul > :first .EditButton > svg').click()
    cy.get(".slider").click()
    cy.get(".TaskDate").click()
    cy.get(".TaskDate").type("2012-04-09")
    cy.get('.TaskTime').click()
    cy.get(".TaskTime").type("14:15")
    cy.get(".colorWrapper").click()
    cy.get(".transparent").click()
    cy.get(".saveButton").click()
  })
})