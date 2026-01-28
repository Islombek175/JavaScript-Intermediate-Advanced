// forEach
// map, filter, some, reduce -> return new array

// -----MAP-----
const cars = ['BMW', 'Mercedes', 'Audi']

const newCars = cars.map(car => car.toLowerCase())
// map -> returns new array

console.log(newCars)
console.log('--------------')

// -----FILTER-----

const array = [
	{
		name: 'BMW',
		model: 2020,
	},
	{
		name: 'Mercedes',
		model: 2018,
	},
	{
		name: 'Matiz',
		model: 2010,
	},
	{
		name: 'Lamborghini',
		model: 2022,
	},
]

const newArray = array.filter(car => car.model >= 2020)
// filter -> filters elements based on condition and returns new array

console.log(newArray)
console.log('--------------')

// -----SOME/EVERY-----

const arr = [2026, 'Hello', true]

const some1 = arr.some(item => typeof item === 'number')
// some -> checks if AT LEAST ONE! element meets the condition

const every1 = arr.every(item => typeof item === 'number')
// every -> checks if ALL! elements meet the condition

console.log(some1) // true
console.log(every1) // false
console.log('--------------')

// -----REDUCE-----

const arr2 = [3, 4, 1, 6, 7]

//													0    +    3
//													3    +    4
// 													7    +    1
// 													8    +    6
// 													14   +    7
// 													21   +    0
const result = arr2.reduce((prev, current) => prev + current)
// reduce -> reduces the array to a single value based on the function provided
