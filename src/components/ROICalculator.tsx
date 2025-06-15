
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Calculator, TrendingUp, Clock, DollarSign } from "lucide-react";

const ROICalculator = () => {
  const [employees, setEmployees] = useState([50]);
  const [avgSalary, setAvgSalary] = useState([75000]);
  const [hoursPerWeek, setHoursPerWeek] = useState([10]);
  const [dataSources, setDataSources] = useState([5]);

  // Calculations
  const currentCost = (employees[0] * avgSalary[0] * (hoursPerWeek[0] / 40)) / 52;
  const dataFlowCost = dataSources[0] <= 5 ? 49 : dataSources[0] <= 20 ? 149 : 499;
  const timeSavings = hoursPerWeek[0] * 0.75; // 75% time savings
  const weeklySavings = (employees[0] * (avgSalary[0] / 52 / 40)) * timeSavings;
  const monthlySavings = weeklySavings * 4.33;
  const annualSavings = monthlySavings * 12;
  const annualCost = dataFlowCost * 12;
  const roi = ((annualSavings - annualCost) / annualCost) * 100;
  const paybackMonths = annualCost / monthlySavings;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            ROI Calculator
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Calculate Your Potential Savings
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how much time and money DataFlow Pro can save your organization. 
            Adjust the parameters below to get a personalized estimate.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calculator Inputs */}
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <Calculator className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Your Current Situation
                </h3>
              </div>

              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Number of Employees: <span className="font-bold">{employees[0]}</span>
                  </label>
                  <Slider
                    value={employees}
                    onValueChange={setEmployees}
                    max={1000}
                    min={5}
                    step={5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>5</span>
                    <span>1000+</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Average Salary: <span className="font-bold">${avgSalary[0].toLocaleString()}</span>
                  </label>
                  <Slider
                    value={avgSalary}
                    onValueChange={setAvgSalary}
                    max={200000}
                    min={30000}
                    step={5000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>$30K</span>
                    <span>$200K+</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Hours/Week on Data Tasks: <span className="font-bold">{hoursPerWeek[0]} hours</span>
                  </label>
                  <Slider
                    value={hoursPerWeek}
                    onValueChange={setHoursPerWeek}
                    max={40}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1 hour</span>
                    <span>40 hours</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Number of Data Sources: <span className="font-bold">{dataSources[0]}</span>
                  </label>
                  <Slider
                    value={dataSources}
                    onValueChange={setDataSources}
                    max={50}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1</span>
                    <span>50+</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Results */}
            <div className="space-y-6">
              <Card className="p-8 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <div className="flex items-center mb-6">
                  <TrendingUp className="w-6 h-6 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    Your Potential Savings
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {timeSavings.toFixed(1)}h
                    </div>
                    <div className="text-sm text-gray-600">
                      Hours saved per week
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      ${monthlySavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </div>
                    <div className="text-sm text-gray-600">
                      Monthly savings
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {roi.toFixed(0)}%
                    </div>
                    <div className="text-sm text-gray-600">
                      Annual ROI
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {paybackMonths.toFixed(1)}
                    </div>
                    <div className="text-sm text-gray-600">
                      Months to payback
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h4 className="font-bold text-gray-900 mb-4">Cost Breakdown</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Current annual cost:</span>
                    <span className="font-medium">${currentCost.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">DataFlow Pro annual cost:</span>
                    <span className="font-medium">${annualCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-green-600 font-bold border-t pt-3">
                    <span>Net annual savings:</span>
                    <span>${(annualSavings - annualCost).toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                  </div>
                </div>
              </Card>

              <div className="space-y-3">
                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                  Start Your Free Trial
                </Button>
                <Button size="lg" variant="outline" className="w-full">
                  Get Custom ROI Report
                </Button>
              </div>

              <p className="text-xs text-gray-500 text-center">
                * Calculations based on industry averages and customer data. 
                Actual results may vary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
