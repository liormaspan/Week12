import { person } from "./data.js";

const averageAge = (person) => {
    const totalAge = person.reduce((acc, person) => acc + person.age, 0);
    const numPersons = person.length;

    if (numPersons > 0) {
        const avgAge = totalAge / numPersons;
        console.log("Average age:", avgAge);
    } else {
        console.log("No persons in the array");
    }
};

averageAge(person)