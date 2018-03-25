function Employee(obj) {
    let _name = obj.name;
    let _primarySkill = obj.primarySkill;
    let _age = obj.age;
    let _salary = obj.salary;
    let _logs = [];
    let _company = null;
    let _workingTime = 0;
    let _hireTime = null;

    let isNumeric = function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };
    function salaryIsValid(salary) {
        if(isNumeric(salary)) {
            return salary >= null && salary > _salary
        } else return false;
    }
    function calculateTimeDifInSeconds(first, second){
        let difInSeconds = (first.getTime() - second.getTime()) / 1000;
        return Math.round(Math.abs(difInSeconds));
    }

    this.getSalary = function() {
        return _salary;
    }
    this.setSalary = function(salary) {
        if(salaryIsValid(salary)){
            _salary = salary;
            _logs.push(`change salary from ${_salary} to ${salary}`);
        } else {
            _logs.push(`try to change salary from ${_salary} to ${salary}`);
        }
    }
    this.getWorkTimeInSeconds = function() {
        let curTime = new Date();
        if(_hireTime && _company) {
            return calculateTimeDifInSeconds(_hireTime, curTime) + _workingTime;
        } else if(_workingTime && !_hireTime) {
            return _workingTime;
        } else console.log('This person has not been employed')
    }
    this.hire = function(company) {
        if(!_company && !_hireTime){
            _company = company;
            _hireTime = new Date();
            _logs.push(`${_name} is hired to ${_company} in ${new Date()}`);
        } else console.log("This person is working already")
    }
    this.fire = function() {
        if(_hireTime && _company){
            let curTime = new Date();
            _workingTime += calculateTimeDifInSeconds(_hireTime, curTime);
            _hireTime = null;
            _logs.push(`${_name} is fired from ${_company} in ${new Date()}`);
            _company = null;
        } else console.log("This person does not work right now");
    }
    this.getHistory = function() {
        return _logs;
    }
    this.getAge = function() {
        return _age;
    }
    this.getName = function() {
        return _name;
    }
    this.getWorkTimeInCurrentCompany = function() {
        if(_hireTime && _company){
            let curTime = new Date();
            return calculateTimeDifInSeconds(_hireTime, curTime);
        } else return "Something went wrong"
    }
}

function Company(obj) {
    let _companyName = obj.name;
    let _owner = obj.owner;
    let _maxCount = obj.maxCompanySize;
    let _employees = [];
    let _logs = [];

    (function(){
        _logs.push(`${_companyName} was created at ${new Date()}`);
    }())

    this.addNewEmployee = function(employee) {
        if( employee instanceof Employee ){
            if(_employees.length < _maxCount){
                employee.hire(_companyName);
                _employees.push(employee);

            } else if(_employees.length === _maxCount){
                let lowestSalaryIndex = 0;
                for (let i = 1; i < _employees.length; i++){
                    if(_employees[i].getSalary() < _employees[i-1].getSalary())
                        lowestSalaryIndex = i;
                }
                this.removeEmployee(lowestSalaryIndex);
                employee.hire(_companyName);
                _employees.push(employee);
            }
            _logs.push(`${employee.getName()} starts working at ${_companyName} in ${new Date()}`);
        } else {
            console.log("Please try to add Employee instance");
        }

    }
    this.removeEmployee = function(index) {
        _employees[index].fire();
        _logs.push(`${_employees[index].getName()} ends working at ${_companyName} in ${new Date()}`);
        _employees.splice(index, 1);
    }
    this.getAvarageSalary = function() {
        let sum = 0;
        _employees.forEach(function(elem){
            sum += elem.getSalary();
        });
        return sum / _employees.length;
    }
    this.getEmployees = function() {
        return _employees;
    }
    this.getFormattedListOfEmployees = function() {
        let list = _employees.map(function(elem) {
            return `${elem.getName()} - works in ${_companyName} ${elem.getWorkTimeInCurrentCompany()}`;
        });
        return list;
    }
    this.getAvarageAge = function() {
        let sum = 0;
        _employees.forEach(function(elem){
            sum += elem.getAge();
        });
        return sum / _employees.length;
        return sum / _employees.length;
    }
    this.getHistory = function() {
        return _logs;
    }
}

let artem = new Employee({name: "Artem", age: 15, salary: 1000, primarySkill: "UX"});
let vova = new Employee({name: "Vova", age: 16, salary: 2000, primarySkill: "BE"});
let vasyl = new Employee({name: "Vasyl", age: 25, salary: 1000, primarySkill: "FE"});
let ivan = new Employee({name: "Ivan", age: 35, salary: 5000, primarySkill: "FE"});
let orest = new Employee({name: "Orest", age: 29, salary: 300, primarySkill: "AT"});
let anton = new Employee({name: "Anton", age: 19, salary: 500, primarySkill: "Manager"});

let epam = new Company({name: "Epam", owner: "Arkadii", maxCompanySize: 5});
epam.addNewEmployee(artem);
epam.addNewEmployee(vova);
epam.addNewEmployee(vasyl);
epam.addNewEmployee(ivan);
epam.addNewEmployee(orest);
epam.addNewEmployee(anton);

console.log(epam.getHistory());

epam.removeEmployee(2);

console.log(vasyl.getHistory());

console.log(epam.getAvarageSalary()); // -> 2125
console.log(epam.getAvarageAge());  // -> 21.25

epam.addNewEmployee(5,6,9,5);

setTimeout(() => {
   epam.removeEmployee(1);
   console.log(artem.getWorkTimeInSeconds()); // -> 5.5744444444444445
}, 5000);

vova.setSalary(900);
vova.setSalary(2200);
console.log(vova.getHistory());
