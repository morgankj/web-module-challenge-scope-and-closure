var addSix = createBase(6);

function createBase(num) {
    return function(num2) {
        return num + num2;
    }
}

addSix(10);


// Functional Programming v. Object Oriented Programming -- It comes down to preference!

/* -- Functional Programming --
Functional programming attempts to avoid changing state and mutable data. The outputs of a function in functional programming rely on arguments of the function; there is no magic happening behind the scenes. This eliminates side effects in your code.
Pros:
- avoids changing state and mutable data
- output of function is consistent and will always be the same
- Supports parallel programming
- statements can be executed in any order

Cons:
- not mutable, so it isn't flexible
- all about data manipulation, which is less intuitive
*/

/* -- Object Oriented Programming --
Object oriented programming is a programming paradigm in which you program using objects to represent concepts. These objects could be data structures. They hold data in attributes which can be manipulated through methods or functions that are given to the object.
Pros:
- Everything is controlled via objects, so it's all mutable
- the ability to hide variables within the class from outside access — which makes it great for security reasons
- allows you to model real world scenarios much simpler


Cons:
- Does not support parallel programming
- statements must be executed in a particular order
- not as reusable
- can be less efficient and more complex

*/