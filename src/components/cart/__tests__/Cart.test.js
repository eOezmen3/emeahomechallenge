import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "jest-localstorage-mock";

import Cart from "../Cart";
// eslint-disable-next-line jest/no-mocks-import
import MockBooks from "../../book/__mocks__/mockBooks";

describe("Cart", () => {
  afterEach(() => localStorage.clear());

  test("add and delete book on the cart", async () => {
    const KEY = "cart";
    localStorage.setItem(KEY, JSON.stringify([MockBooks[0]]));

    render(<Cart />);
    expect(JSON.parse(localStorage.getItem(KEY))).toHaveLength(1);
    expect(screen.getAllByText("Remove Item")).toBeTruthy();

    // delete item
    fireEvent.click(await screen.findByRole("button"));
    expect(JSON.parse(localStorage.getItem(KEY))).toHaveLength(0);
  });
});
