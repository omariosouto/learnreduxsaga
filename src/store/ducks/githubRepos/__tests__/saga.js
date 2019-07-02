import { getRepos } from "../saga";

describe("githubRepos/saga", () => {
  describe("githubRepos/getRepos", () => {
    it("should do something", () => {
      console.log(getRepos().next());
      console.log(getRepos().next());
      console.log(getRepos().next());

      expect(true).toEqual(true);
    });
  });
});
