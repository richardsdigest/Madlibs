### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is an open-sourced JavaScript Library created by Facebook that is used particularly for SPA's. You would use it for SPA's, high performance, or building User Interfaces. 
- What is Babel?
Babel is a JavaScript compiler that lets developers write modern JavaScript code. It also ensures that the code can run in older environments. 
- What is JSX?
JSX is a syntax extension for JavaScript that lets you write HTML-like code within the files. 
- How is a Component created in React?
They are created as either functional components or class components. 
- What are some difference between state and props?
Props are passed from parent to child, used to configure a component, and are immutable. 
States are handled within the component and are used to handle data that changes overtime. 
- What does "downward data flow" refer to in React?
It refers to the concept that data flows from parent compenents to child compenents in a singular direction. 
- What is a controlled component?
A controlled component is when the form input element is set by the components state 
- What is an uncontrolled component?
Uncontrolled components handle their own state internally using DOM to hold the input value.
- What is the purpose of the `key` prop when rendering a list of components?
It helps find what items in a list have changed, been added, or removed. 
- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
It's considered a poor choice because it can lead to problems with component state preservation, performance ineffecincies, and incorrect rendering. 
- Describe useEffect.  What use cases is it used for in React components?
useEffect allows you to perform side effects in function components. The use cases its used for are data fetching, subscribing to events, and timers and intervals. 
- What does useRef do?  Does a change to a ref value cause a rerender of a component?
it creates a persistent, mutable ref object with a current property. A change to a ref value does not cause a rerender of a component. 
- When would you use a ref? When wouldn't you use one?
You would use a ref to access DOM elements, to store mutable values that don't trigger re-renders and you wouldn't use them to manage components state or triggering UI updates or as substitute for Props. 
- What is a custom hook in React? When would you want to write one?
A custom hook is a reusable function that captures logic that involves state, side effects, or other hooks. You would use it if you need to have it across multiple components. 
