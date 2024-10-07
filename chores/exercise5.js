/*

5. **Destructuring Assignment:**
   Declare an object called `car` with properties `make`, `model`, and `year`. Use destructuring assignment with default values to extract `make` and `model`, and assign the default value "unknown" to `year`.

*/

const carProperties = (obj) => {

  const { make, model, year = "unknown" } = car;
  const prop = [make, model, year];

  return prop;
}

const car = {
  make: "Toyota",
  model: "LandRover",
  year: 2020
}

console.log(carProperties(car));

export default carProperties