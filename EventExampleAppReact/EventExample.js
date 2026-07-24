import React, { useState } from 'react';

function EventExamples() {

    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    function sayHello() {
        alert("Hello! Have a Nice Day.");
    }

    function handleIncrease() {
        increment();
        sayHello();
    }

    function sayWelcome(message) {
        alert(message);
    }

    function handleClick(e) {
        alert("I was clicked");
        console.log(e);
    }

    return (
        <div>

            <h2>Counter : {count}</h2>

            <button onClick={handleIncrease}>
                Increment
            </button>

            &nbsp;

            <button onClick={decrement}>
                Decrement
            </button>

            <br /><br />

            <button onClick={() => sayWelcome("Welcome")}>
                Say Welcome
            </button>

            <br /><br />

            <button onClick={handleClick}>
                OnPress
            </button>

        </div>
    );
}

export default EventExamples;