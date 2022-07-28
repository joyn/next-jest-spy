
import * as Helpers from "../helper";

describe('helper', () => {

    it("should spy get name", () => {
        const spy = jest.spyOn(Helpers, "getName");
        Helpers.getName();
        expect(spy).toHaveBeenCalled();
    })
});
