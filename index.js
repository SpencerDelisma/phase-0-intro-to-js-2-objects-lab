const employee = {
  name : "drew",
  streetAddress : "123 main street "
}
function updateEmployeeWithKeyAndValue(employee, key, value){
     const newemployee ={
       ... employee
     }
     newemployee[key] = value
     return newemployee
}function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}function deleteFromEmployeeByKey(employee, key) {
  const clonedEmployee = { ...employee };
  delete clonedEmployee[key];
  return clonedEmployee;
}function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}