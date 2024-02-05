
describe("Loan Calculator", function() {
  // Test suite for calculateMonthlyPayment function
  describe("calculateMonthlyPayment", function() {
    it('should calculate the monthly payment correctly', function () {
      // Test different scenarios with known values and verify the calculated result
      const values1 = { amount: 10000, years: 5, rate: 5 };
      expect(calculateMonthlyPayment(values1)).toEqual('188.71'); // Example result based on calculation

      const values2 = { amount: 20000, years: 10, rate: 7 };
      expect(calculateMonthlyPayment(values2)).toEqual('232.22'); // Example result based on calculation
    });

    it("should return a result with 2 decimal places", function() {
      const values = { amount: 10000, years: 5, rate: 5 };
      const monthlyPayment = calculateMonthlyPayment(values);

      // Check if the result has exactly 2 decimal places
      expect(monthlyPayment.split('.')[1].length).toEqual(2);
    });
  });

  // Test suite for updateMonthly function
  describe("Loan Calculator", function() {
    // Mock setup
    beforeEach(function() {
      // Mock document.getElementById
      document.getElementById = jasmine.createSpy('HTML Element').and.returnValue({
        textContent: ''
      });
    });
  
    // Test suite for updateMonthly function
    describe("updateMonthly", function() {
      it("should update the monthly payment span with the calculated value", function() {
        // Call updateMonthly with a mock value
        const mockMonthlyPayment = '200.00';
        updateMonthly(mockMonthlyPayment);
  
        // Check if the mocked element's textContent was updated correctly
        expect(document.getElementById).toHaveBeenCalledWith("monthly-payment");
        expect(document.getElementById("monthly-payment").textContent).toEqual('$200.00');
      });
    });
  });
  
});
