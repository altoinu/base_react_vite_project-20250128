import useFetch from "./useFetch.mjs";
import useGetConfig from "./useGetConfig.mjs";
import { describe, expect, it, jest } from "@jest/globals";
import { act, renderHook } from "@testing-library/react";

const TEST_URL = "http://localhost:4000/";

/*
TODO:
jest.mock causes test to fail with error:
  ReferenceError: require is not defined
Problem seems to be only with .test.mjs in React Vite project. Other situations
(ex. Main.test.jsx in this project, same .test.mjs in Next.js project) work
fine... My brain is about to explode

Could it be because of this?
https://jestjs.io/docs/getting-started#using-vite
https://jestjs.io/docs/ecmascript-modules
https://github.com/haoqunjiang/vite-jest/tree/main/packages/vite-jest#mocking-es-modules
https://github.com/jestjs/jest/issues/10025

Maybe try Vitest?
https://victorbruce82.medium.com/vitest-with-react-testing-library-in-react-created-with-vite-3552f0a9a19a
*/
// mock a hook
// jest.mock("./useFetch.mjs");
const mockUseFetch = useFetch; // as jest.Mock;

describe.skip("useGetConfig", () => {
  /*
  let mockUseFetch;
  beforeEach(() => {
    // mock a hook
    jest.mock("./useFetch.mjs");
    mockUseFetch = useFetch; // as jest.Mock;
  });
  */

  it("can send API request to config.json", () => {
    renderHook(() => useGetConfig());

    expect(mockUseFetch).toHaveBeenCalledWith(
      expect.objectContaining({
        method: "GET",
        url: TEST_URL + "config.json",
      }),
    );
  });

  it("can get API response JSON", async () => {
    const mockResponseJSON = { foo: "bar" };
    const mockFetch = jest.fn(() => ({ data: mockResponseJSON }));
    mockUseFetch.mockReturnValueOnce({ fetch: mockFetch });

    const { result } = renderHook(() => useGetConfig());

    await act(async () => {
      const { data } = await result.current.fetch();
      expect(data).toStrictEqual(mockResponseJSON);
    });
  });
});
