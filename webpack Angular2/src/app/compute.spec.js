"use strict";
var compute_1 = require("./compute");
describe('compute', function () {
    it('should return 0 if input is negative', function () {
        var result = compute_1.compute(-1);
        expect(result).toBe(0);
    });
    it('should increment the input  if it is positive', function () {
        var result = compute_1.compute(1);
        expect(result).toBe(2);
    });
});
//# sourceMappingURL=compute.spec.js.map