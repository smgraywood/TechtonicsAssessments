import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import {Form} from "./Form"

describe("Form"), () => {
    it("should render the basic fields", () => {
        render(<Form />);
        expect(screen.getByName("input", { name: /email/i })).toBeInTheDocument();
        expect(screen.getByName("input", { name: /name/i })).toBeInTheDocument();
        expect(screen.getByName("input", { name: /age/i })).toBeInTheDocument();
        expect(screen.getByName("imput", { type: /submit/i }).toBeInTheDocument();
    })
describe("Form"), () => {
    it("should throw error if user is not between 18 and 99", () => {
        render(<Form />);
        expect(screen.getByName("input", { name: /age/i})).toHaveErrorMessage
        ("You should be between 18 and 99 years old to register in our form");
    });
    //there should be a way to test that this works for the edge cases of 18 and 99, 
    //as well as a way to test for a person who is below, in the middle of, and above the age range.

    //check for validation on email address?

describe("Form"), () => {
    it("should have values in all input fields", () => {
        render(<Form />);
        expect(screen.findAllByRole("input")).toHaveFormValues();
    });