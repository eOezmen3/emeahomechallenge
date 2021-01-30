import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";

import BookCard from "../BookCard";
// eslint-disable-next-line jest/no-mocks-import
import MockBooks from "../__mocks__/mockBooks";

describe("App", () => {
  test("loads and displays greeting", async () => {
    render(
      <BrowserRouter>
        <BookCard books={MockBooks} />
      </BrowserRouter>
    );

    const books = await screen.getAllByText("Book in detail");
    expect(books).toHaveLength(5);
  });
});
