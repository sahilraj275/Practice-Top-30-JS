//! 1. Event Delegation
// event delegation is a method in which instead of attaching events listener on nested children elements directly attach a single event listener handler to their parent to handle events for their children.

// performance optimization
// simpler code management

{
  /* <div id="parent">
  <button id="child1">Child 1</button>
  <button id="child2">Child 2</button>
  <button id="child3">Child 3</button>
</div>; */
}

document.getElementById("parent").addEventListener("click", () => {
  alert("Parent clicked");
});

// ! 2. Event propagation capturing,target and bubbling

// event propagation is a pattern or sequence which determines how will events flow through dom tree. it has three states-> capturing,bubbling and target

//* a. Capturing phase -> In this phase the event propagates through parent to its children but to achieve this we have to pass a boolean in the eventListener.

{
  /* <div id="parent">
  <button id="child1">Child 1</button>
  <button id="child2">Child 2</button>
  <button id="child3">Child 3</button>
</div>; */
}

document.getElementById("parent").addEventListener(
  "click",
  () => {
    console.log("Parent got clicked");
  },
  true
);

document.getElementById("child1").addEventListener(
  "click",
  () => {
    console.log("Child1 got clicked");
  },
  true
);

document.getElementById("child2").addEventListener(
  "click",
  () => {
    console.log("Child2 got clicked");
  },
  true
);
document.getElementById("child3").addEventListener(
  "click",
  () => {
    console.log("Child3 got clicked");
  },
  true
);

// * b.Bubbling Phase-> in this phase the event propagates through children to its nearest ancestor or parent. this is by default feature of event phase.

{
  /* <div id="parent">
  <button id="child1">Child 1</button>
  <button id="child2">Child 2</button>
  <button id="child3">Child 3</button>
</div>; */
}

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent got clicked");
});

document.getElementById("child1").addEventListener("click", () => {
  console.log("Child1 got clicked");
});

document.getElementById("child2").addEventListener("click", () => {
  console.log("Child2 got clicked");
});
document.getElementById("child3").addEventListener("click", () => {
  console.log("Child3 got clicked");
});

//! 3. call apply and bind
//  call apply and bind  is used in js to set the 'this' keyword behaviour inside the function when we want to set specified value of this inside function we use call apply and bind.

