let expect = require("chai").expect;

class Sumator {
    constructor() {
        this.data = [];
    }

    add(item) {
        this.data.push(item);
    }

    sumNums() {
        let sum = 0;
        for (let item of this.data)
            if (typeof (item) === 'number')
                sum += item;
        return sum;
    }

    removeByFilter(filterFunc) {
        this.data = this.data.filter(x => !filterFunc(x));
    }

    toString() {
        if (this.data.length > 0)
            return this.data.join(", ");
        else
            return '(empty)';
    }
}


describe("Tests for taskTwo task", function () {

    let myList;
    beforeEach(function () {
        myList = new Sumator();
    });

//Test initial state:
    describe("Initial tests", function () {
        it("add should exist", function () {
            expect(Sumator.prototype.hasOwnProperty("add")).to.equal(true);
        });
        it("remove should exist", function () {
            expect(Sumator.prototype.hasOwnProperty("sumNums")).to.equal(true);
        });
        it("get should exist", function () {
            expect(Sumator.prototype.hasOwnProperty("removeByFilter")).to.equal(true);
        });
        it("size should exist", function () {
            expect(Sumator.prototype.hasOwnProperty("toString")).to.equal(true);
        })
    });

//add():
    describe("Test add", function () {
        it("add with empty element", function () {
            myList.add();
            expect(myList.data.join(", ")).to.equal("");
        });
        it("add with 0 as a number", function () {
            myList.add(0);
            expect(myList.data.join(", ")).to.equal("0");
        });
        it("add with 1 element - number", function () {
            myList.add(5);
            expect(myList.data.join(", ")).to.equal("5");
        });
        it("add with 1 element - string", function () {
            myList.add("opa");
            expect(myList.data.join(", ")).to.equal("opa");
        });
        it("add with many elements - numbers", function () {
            myList.add(5);
            myList.add(4);
            myList.add(3);
            expect(myList.data.join(", ")).to.equal("5, 4, 3");
        });
        it("add with many elements - fractional numbers", function () {
            myList.add(5.1);
            myList.add(4.1);
            myList.add(3.1);
            expect(myList.data.join(", ")).to.equal("5.1, 4.1, 3.1");
        });
        it("add with many elements - negative numbers", function () {
            myList.add(-5);
            myList.add(-4.1);
            myList.add(0);
            expect(myList.data.join(", ")).to.equal("-5, -4.1, 0");
        });
        it("add with many elements - strings only", function () {
            myList.add("opa");
            myList.add("opa 2");
            myList.add("opa 3");
            expect(myList.data.join(", ")).to.equal("opa, opa 2, opa 3");
        });
        it("add with mixed elements - strings + numbers", function () {
            myList.add("opa");
            myList.add(2);
            myList.add("opa 3");
            expect(myList.data.join(", ")).to.equal("opa, 2, opa 3");
        });
    });

//sumNums():
    describe("Test sumNums", function () {
        it("add with empty element", function () {
            myList.add();
            expect(myList.sumNums()).to.equal(0);
        });
        it("add with 2 empty elements", function () {
            myList.add();
            myList.add();
            expect(myList.sumNums()).to.equal(0);
        });
        it("add with 0 and a number", function () {
            myList.add(0);
            myList.add(1);
            expect(myList.sumNums()).to.equal(1);
        });
        it("add with 2 numbers", function () {
            myList.add(1);
            myList.add(2);
            expect(myList.sumNums()).to.equal(3);
        });
        it("add with 3 numbers", function () {
            myList.add(1);
            myList.add(2);
            myList.add(5);
            expect(myList.sumNums()).to.equal(8);
        });
        it("add with 2 fractional numbers", function () {
            myList.add(1.2);
            myList.add(2.1);
            expect(myList.sumNums()).to.equal(3.3);
        });
        it("add with 3 negative numbers", function () {
            myList.add(-1);
            myList.add(-2);
            myList.add(-3);
            expect(myList.sumNums()).to.equal(-6);
        });
        it("add with 2 negative numbers + positive", function () {
            myList.add(-1);
            myList.add(-2);
            myList.add(3);
            expect(myList.sumNums()).to.equal(0);
        });
        it("add with 2 numbers + string", function () {
            myList.add(1);
            myList.add("2");
            myList.add(5);
            expect(myList.sumNums()).to.equal(6);
        });
        it("add with 2 fractional numbers + string", function () {
            myList.add(1.1);
            myList.add(2.1);
            myList.add("5.1");
            expect(myList.sumNums()).to.equal(3.2);
        });
        it("add with 2 negative numbers + string", function () {
            myList.add(-1);
            myList.add("2");
            myList.add(-5);
            expect(myList.sumNums()).to.equal(-6);
        });
    });

//type of item:
    describe("Type of data", function () {
        it("with number - typeof sum to be number", function () {
            myList.add(1);
            expect(typeof myList.sumNums()).to.equal("number");
        });
        it("with string only - typeof sum to be number", function () {
            myList.add("1");
            myList.add("opa");
            expect(typeof myList.sumNums()).to.equal("number");
        });
        it("with mixed - typeof sum to be number", function () {
            myList.add("1");
            myList.add(2);
            myList.add("opa");
            expect(typeof myList.sumNums()).to.equal("number");
        });
    });

//toString():
    describe("test toString", function () {
        it("with 1 empty element", function () {
            expect(myList.toString()).to.equal("(empty)");
        });
        it("with 1 empty element", function () {
            myList.add();
            expect(myList.toString()).to.equal("");
        });
        it("with 0 as a number", function () {
            myList.add(0);
            expect(myList.toString()).to.equal("0");
        });
        it("with empty elements", function () {
            myList.add();
            myList.add();
            expect(myList.toString()).to.equal(", ");
        });
        it("with number - typeof sum to be number", function () {
            myList.add(1);
            myList.add(2);
            expect(myList.toString()).to.equal("1, 2");
        });
        it("with mixed elements", function () {
            myList.add(1);
            myList.add(-2);
            myList.add(2.3);
            expect(myList.toString()).to.equal("1, -2, 2.3");
        });
        it("with mixed functions", function () {
            myList.add(1);
            myList.sumNums(-2);
            myList.add(2.3);
            expect(myList.toString()).to.equal("1, 2.3");
        });
        it("with mixed functions", function () {
            myList.add(1);
            myList.add("1");
            myList.sumNums(-2);
            myList.sumNums("-2");
            myList.add(2.3);
            expect(myList.toString()).to.equal("1, 1, 2.3");
        });
    });

//removeByFilter(filterFunc):
    describe("test removeByFilter", function () {
        it("with x => x % 2 === 0", function () {
            myList.add(1);
            myList.add("1");
            myList.sumNums(-2);
            myList.sumNums("-2");
            myList.add(2.3);
            myList.add(4);
            myList.add(2);
            myList.add(23);
            myList.removeByFilter(x => x % 2 === 0);
            expect(myList.data.join(", ")).to.equal("1, 1, 2.3, 23");
        });
        it("with x => x % 2 !== 0", function () {
            myList.add(1);
            myList.add("1");
            myList.sumNums(-2);
            myList.sumNums("-2");
            myList.add(2.3);
            myList.add(4);
            myList.add(2);
            myList.add(23);
            myList.removeByFilter(x => x % 2 !== 0);
            expect(myList.data.join(", ")).to.equal("4, 2");
        });
        it("with 1 empty element", function () {
            myList.add(1);
            myList.add("1");
            myList.sumNums(-2);
            myList.sumNums("-2");
            myList.add(2.3);
            myList.removeByFilter;
            expect(myList.data.join(", ")).to.equal("1, 1, 2.3");
        });
    });
});