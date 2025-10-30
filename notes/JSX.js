// Attributes in JSX
const p1 = <p id="large">foo</p>;
const p2 = <p id="small">bar</p>;

// Nexted JSX
const myDiv = (
  <div>
    <h1>Hello world</h1>
  </div>
);

// JSX Outer Elements
const blog = (
  <div>
    <img src="pics/192940u73.jpg" />
    <h1>Welcome to Dan's Blog!</h1>
    <article>
      Wow I had the tastiest sandwich today. I <strong>literally</strong> almost
      freaked out.
    </article>
  </div>
);

// passing a Variable to render
const toDoList = (
  <ol>
    <li>Learn React</li>
    <li>Become a Developer</li>
  </ol>
);

const container = document.getElementById("app");
const root = createRoot(container);
root.render(toDoList);
