/**
 * This file contains the unit tests for each public function in
 * functions.js
 * 
 * The tests are written with Jasmine 2.4. For documentation:
 * https://jasmine.github.io/2.4/introduction.html
 * 
 */

(function () {
  'use strict';

  describe("Testing Multiply Method", function() {
    it("should multiply 2 negative numbers correctly", function() {
      var result = multiply(-10, -12);
      expect(result).toBe(120);
    });
    it("should multiply 1 negative number correctly", function() {
      var result = multiply(-10, 12);
      expect(result).toBe(-120);
    });
    it("should multiply two positive numbers correctly", function() {
      var result = multiply(20, 100);
      expect(result).toBe(2000);
    });
    it("should multiply two zeros correctly", function() {
      var result = multiply(0, 0);
      expect(result).toBe(0);
    });
    it("should multiply one zero correctly", function() {
      var result = multiply(0, 100);
      expect(result).toBe(0);
    });
    it("should handle large numbers", function() {
      var result = multiply(900000, 800000);
      expect(result).toBe(720000000000);
    });
  });

  describe("Testing Divide Method", function() {
    //Now go write your own!
  });

  describe("Testing StringEqualsApples Method", function() {
    //Now go write your own!
  });

  describe("Testing StringEqualsApples Method", function() {
    //Now go write your own!
  });


})();


