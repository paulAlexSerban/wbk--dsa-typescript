/**
 * Object Types
 * - object exist to describe the type of object that is getting used somewhere
 *  * At their most basic, objects are just collections of key-value pairs.
 * In other words, they are pieces of data (values) mapped to unique identifiers called properties (keys)
 */

(() => {
    const tekkenCharacter: {
        // object type
        player: string;
        fightingStyle: string;
        human?: boolean;
    } = {
        // the object itself
        player: 'Hwoarang',
        fightingStyle: 'Tae Kwon Doe',
        human: true,
    };

    console.log(tekkenCharacter);
})();

(() => {
    const person: {
        name: string;
        age: number;
    } = {
        name: 'John',
        age: 30,
    };

    console.log(person);
})();

(() => {
    type PersonType = {
        name: string;
        age: number;
    };

    const person: PersonType = {
        name: 'John',
        age: 30,
    };

    console.log(person);
})();

(() => {
    type Point = {
        x: number;
        y: number;
        // optional properties use `?` syntax
        z?: number;
    };

    const point: Point = {
        x: 10,
        y: 20,
    };

    console.log(point);
})();

(() => {
    type User = {
        readonly id: string;
        username: string;
        email: string;
    };

    const newUser: User = {
        id: '123',
        username: 'john',
        email: 'test@gmail.com',
    };

    console.log(newUser);
})();

(() => {
    /**
     * Nested Type Annotations (Object Types)
     */
    const product: {
        id: string;
        price: number;
        tags: string[];
        details: {
            title: string;
            description: string;
        };
    } = {
        id: 'abc1',
        price: 12.99,
        tags: ['great-offer', 'hot-and-new'],
        details: {
            title: 'Red Carpet',
            description: 'A great carpet - almost brand-new!',
        },
    };

    console.log(product);
})();

(() => {
    /**
     * Intersection Types
     * ==================
     * Intersection types allow us to combine multiple types into one.
     * This allows us to add together existing types to get a single type that has all the features we need.
     */

    type Circle = {
        radius: number;
    };

    type Colorful = {
        color: string;
    };

    type CircleColorful = Circle & Colorful;

    const circle: CircleColorful = {
        radius: 10,
        color: 'red',
    };
    console.log(circle);

    type Ball = CircleColorful & {
        isBouncy: boolean;
    };

    const ball: Ball = {
        radius: 10,
        color: 'red',
        isBouncy: true,
    };
    console.log(ball);
})();

(() => {
    /****************************/
    // Write the Movie type alias to make the following two variables properly typed
    // Make sure that "originalTitle" is optional and "title" is readonly
    type Movie = {
        readonly title: string;
        originalTitle?: string;
        director: string;
        releaseYear: number;
        boxOffice: {
            budget: number;
            grossUS: number;
            grossWorldwide: number;
        };
    };

    const dune: Movie = {
        title: 'Dune',
        originalTitle: 'Dune Part One',
        director: 'Denis Villeneuve',
        releaseYear: 2021,
        boxOffice: {
            budget: 165000000,
            grossUS: 108327830,
            grossWorldwide: 400671789,
        },
    };

    const cats: Movie = {
        title: 'Cats',
        director: 'Tom Hooper',
        releaseYear: 2019,
        boxOffice: {
            budget: 95000000,
            grossUS: 27166770,
            grossWorldwide: 73833348,
        },
    };

    // Write a function called getProfit that accepts a single Movie object
    // It should return the movie's worldwide gross minus its budget

    // For example...
    // getProfit(cats) => -21166652

    // function getProfit(movie: Movie): number{
    //     return movie.boxOffice.grossWorldwide - movie.boxOffice.budget
    // }

    // function getProfit(movie: Movie): number {
    //   const { grossWorldwide, budget } = movie.boxOffice;
    //   return grossWorldwide - budget;
    // }

    const getProfit = ({ boxOffice: { grossWorldwide, budget } }: Movie): number => {
        return grossWorldwide - budget;
    };

    console.log(getProfit(dune));
    console.log(getProfit(cats));
})();

(() => {
    type Person = {
        name: string;
        DOB: Date;
    };

    // Employee is a subtype of Person
    type Employee = Person & {
        hireDate: Date;
        id: number;
    };

    const person: Person = {
        name: 'Buzz Lightyear',
        DOB: new Date('1955-02-02'),
    };

    console.log(person);

    // Astronaut is a subtype of Employee
    type Astronaut = Employee & {
        launchDate: Date;
    };

    const employee: Astronaut = {
        name: 'Buzz Lightyear',
        DOB: new Date('1955-02-02'),
        launchDate: new Date('1995-02-02'),
        hireDate: new Date('1995-02-02'),
        id: 1,
    };

    console.log(employee);
})();
