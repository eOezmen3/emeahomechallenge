import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Header from "../../header/Header";

describe("Header", () => {
  test("loads header with correct links", async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(screen.getByText("Book Shop")).toBeTruthy();
    expect(screen.getByText("Cart")).toBeTruthy();
  });
});
