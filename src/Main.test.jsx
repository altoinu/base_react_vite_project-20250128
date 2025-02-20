import Main from "./Main";
import HelloBoxComponent from "./components/HelloBoxComponent";
import { describe, expect, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";

// Several different ways to mock child component
/*
jest.mock("./components/HelloBoxComponent");
*/
jest.mock("./components/HelloBoxComponent", () =>
  jest.fn(() => <div>Mock HelloBoxComponent</div>),
);
/*
jest.mock("./components/HelloBoxComponent", () =>
  jest.fn(({ personName }) => <div>Mock HelloBoxComponent {personName}</div>),
);
*/
/*
jest.mock("./components/HelloBoxComponent", () => ({
  __esModule: true,
  default: ({ personName, secondPersonName }) => (
    <div role="mock-hellobox">
      <span>Mock HelloBoxComponent</span>
      <span data-testid="personName">{personName}</span>
      {secondPersonName && (
        <span data-testid="secondPersonName">{secondPersonName}</span>
      )}
    </div>
  ),
}));
*/

jest.mock("./components/FetchDataComponent", () =>
  jest.fn(() => <div>Mock FetchDataComponent</div>),
);

describe("<Main>", () => {
  it("should render", () => {
    const { container: pageContainer } = render(<Main />);

    expect(pageContainer).toMatchSnapshot();
  });

  it("should render a heading", () => {
    render(<Main />);

    /*
    const heading = screen.getByRole("heading");
    expect(heading.textContent).toBe("Hello from React!!!");
    */

    const heading2 = screen.getByText("Hello from React!!!");
    expect(heading2).toBeInTheDocument();
    expect(heading2).toHaveRole("heading");
  });

  it("should render HelloBoxComponents", () => {
    render(<Main />);

    // Tests to see if passed props were received correctly
    expect(HelloBoxComponent).toHaveBeenCalledTimes(2);
    // undefined in second argument
    // https://dev.to/peterlidee/mocking-react-components-jest-mocking-react-part-2-2l8j
    expect(HelloBoxComponent).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({ personName: "Kaoru" }),
      undefined,
    );
    expect(HelloBoxComponent).toHaveBeenNthCalledWith(
      2,
      expect.objectContaining({ personName: "John", secondPersonName: "Doe" }),
      undefined,
    );

    /*
    // Other ways to test props, by checking actual elements in mocked component
    const helloBox = screen.getAllByRole("mock-hellobox");
    expect(helloBox).toHaveLength(2);

    expect(helloBox[0]).toBeInTheDocument();
    expect(within(helloBox[0]).queryByTestId("personName")).toHaveTextContent(
      "Kaoru",
    );
    expect(
      within(helloBox[0]).queryByTestId("secondPersonName"),
    ).not.toBeInTheDocument();

    expect(helloBox[1]).toBeInTheDocument();
    expect(within(helloBox[1]).queryByTestId("personName")).toHaveTextContent(
      "John",
    );
    expect(
      within(helloBox[1]).queryByTestId("secondPersonName"),
    ).toHaveTextContent("Doe");
    */
  });
});
