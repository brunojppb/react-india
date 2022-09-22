/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor } from "@testing-library/react";
import { Button } from "./Button";

describe("UltimateButton", () => {
  it("should render some text", async () => {
    render(<Button>Hi there!</Button>);

    const button = await waitFor(() => screen.getByText("Hi there!"));

    expect(button).toBeVisible();
  });
});
