/**
 * Reopening Interfaces
 * ====================
 * It is possible to reopen an interface in TypeScript. This allows you to add new properties to an existing interface.
 * This is useful when you want to add new properties to an object, but you don't want to create a new interface.
 */

(() => {
  interface IPerson {
    firstName: string;
    lastName: string;
  }

  // const person: Person = {
  //   firstName: "John",
  //   lastName: "Doe",
  // };

  // console.log(person);

  interface IPerson {
    middleName: string;
  }

  const person2: IPerson = {
    firstName: "John",
    middleName: "Middle",
    lastName: "Doe",
  };

  console.log(person2);
})()