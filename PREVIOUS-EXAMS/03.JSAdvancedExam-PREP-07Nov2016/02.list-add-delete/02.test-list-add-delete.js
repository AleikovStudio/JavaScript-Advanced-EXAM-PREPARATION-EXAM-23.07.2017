let expect = require("chai").expect;

let list = (function () {
    let data = [];
    return {
        add: function (item) {
            data.push(item);
        },
        delete: function (index) {
            if (Number.isInteger(index) && index >= 0 && index < data.length) {
                return data.splice(index, 1)[0];
            } else {
                return undefined;
            }
        },
        toString: function () {
            return data.join(", ");
        }
    };
})();

describe("Tests for this task", function () {

    /*    let list;
     beforeEach(function () {
     list = list();
     });//get initial clear function with the initial values every time it is tested again*/

//toString tests:
    describe("toString tests", function () {
        it("with no input", function () {
            expect(list.toString()).to.equal("");
        });
    });

//add tests:
    describe(".add tests", function () {
        it("with 1 number", function () {
            list.add(0);
            expect(list.toString()).to.equal("0");
        });

        it("with 2 numbers", function () {
            list.add(1);
            list.add(2);
            expect(list.toString()).to.equal("0, 1, 2");
        });

        it("with numbers and String", function () {
            list.add(1);
            list.add(2);
            list.add("3");
            expect(list.toString()).to.equal("0, 1, 2, 1, 2, 3");
        });
    });

//delete tests:
    describe(".delete tests", function () {
        it("Number", function () {
            list.delete(1);
            expect(list.toString()).to.equal("0, 2, 1, 2, 3");
        });

        it("Number", function () {
            expect(list.delete(1)).to.equal(2);
        });

        it("Negative number", function () {
            expect(list.delete(-4)).to.be.undefined;
        });

        it("Negative number should NOT delete any elements", function () {
            list.add(15);
            list.delete(-1);
            expect(list.toString()).to.equal("0, 1, 2, 3, 15");
        });

        it("Floating point number", function () {
            expect(list.delete(4.4)).to.be.undefined;
        });

        it("Floating point number should NOT delete any elements", function () {
            list.add(15);
            list.delete(4.4);
            expect(list.toString()).to.equal("0, 1, 2, 3, 15, 15");
        });

        it("String", function () {
            expect(list.delete("opa")).to.be.undefined;
        });

        it("0 number", function () {
            expect(list.delete(0)).to.equal(0);
        });

        it("With 0 number should return the correct elements", function () {
            list.add(15);
            list.delete(0);
            expect(list.toString()).to.equal("2, 3, 15, 15, 15");
        });

        it("Number", function () {
            expect(list.delete(1)).to.equal("3");
        });

        it("Upper boundary", function () {
            expect(list.delete(3)).to.equal(15);
        });
    });

//delete+add tests:
    describe(".delete tests", function () {
        it("Number", function () {
            list.add(1);
            expect(list.delete(-1)).to.be.undefined;
        });
        it("Number", function () {
            list.delete(1);
            list.add(1);
            list.delete(2);
            list.add(1);
            expect(list.toString()).to.equal("2, 15, 1, 1");
        });
    });
});
