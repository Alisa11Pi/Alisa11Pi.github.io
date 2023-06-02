'use strict';

        describe("pow", function () {

            it("pow(2, 2) => 4", function () {
                assert.strictEqual(pow(2, 2), 4);
            });

            it("pow(2, 0) => 1", function () {
                assert.strictEqual(pow(2, 0), 1);
            });

            it("pow(2, -2) => 0.25", function () {
                assert.strictEqual(pow(2, -2), 0.25);
            });

        });

        describe("sumTo", function () {

            it("sumTo(100) => 5050", function () {
                assert.strictEqual(sumTo(100), 5050);
            });

        });

        describe("factorial", function () {

            it("factorial(0) => 1n", function () {
                assert.strictEqual(factorial(0), 1n);
            });

            it("factorial(5) => 120n", function () {
                assert.strictEqual(factorial(5), 120n);
            });

        });

        describe("fib", function () {

            it("fib(0) => 0n", function () {
                assert.strictEqual(fib(0), 0n);
            });

            it("fib(100) => 354224848179261915075n", function () {
                assert.strictEqual(fib(100), 354224848179261915075n);
            });

        });

        describe("compare", function () {

            it("compare(5)(4) => false", function () {
                assert.isFalse(compare(5)(4));
            });

            it("compare(5)(5) => null", function () {
                assert.isNull(compare(5)(5));
            });

            it("compare(5)(6) => true", function () {
                assert.isTrue(compare(5)(6));
            });

        });

        describe("sum", function () {

            it("sum() => 0", function () {
                assert.strictEqual(sum(), 0);
            });

            it("sum(1) => 1", function () {
                assert.strictEqual(sum(1), 1);
            });

            it("sum(1, 2) => 3", function () {
                assert.strictEqual(sum(1, 2), 3);
            });

        });
