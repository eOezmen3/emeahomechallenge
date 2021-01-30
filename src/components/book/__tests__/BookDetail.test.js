import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "jest-localstorage-mock";

import BookDetail from "../BookDetail";
// eslint-disable-next-line jest/no-mocks-import
import MockBooks from "../__mocks__/mockBooks";

describe("BookDetail", () => {
  afterEach(() => localStorage.clear());

  test("add book to empty cart using localstorage and alert is shown", async () => {
    const book = MockBooks[0];
    const KEY = "cart",
      VALUE = JSON.stringify([{ book: book }]);

    const { container } = render(<BookDetail book={{ book }} />);
    expect(screen.getByRole("button")).toHaveTextContent("Add Book");

    fireEvent.click(await screen.findByRole("button"));
    expect(localStorage.getItem(KEY)).toBe(VALUE);
    expect(container.querySelector("div")).toHaveTextContent(
      "Book is added to the cart"
    );
  });

  test("add book to non empty cart", async () => {
    localStorage.setItem("cart", JSON.stringify([{ book: MockBooks }]));
    const book = MockBooks[1];

    const KEY = "cart";
    render(<BookDetail book={{ book }} />);
    fireEvent.click(await screen.findByRole("button"));
    expect(JSON.parse(localStorage.getItem(KEY))).toHaveLength(2);
  });
});
