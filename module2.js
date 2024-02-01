import {greetings} from "./module1.js";
import farewellmessage from "./module1.js";

function greet(timeofday)
{
    console.log(greetings[timeofday]);
}
console.log(farewellmessage);

export function saygoodbye()
{
    console.log(farewellmessage)

}