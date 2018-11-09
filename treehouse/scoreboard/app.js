const title = 'My First React Element!';
const desc = 'I just learned how to create a React node and render it into the DOM.';
const myTitleID = 'main-title';
const name = 'Ryan';

const header = (
  <header>
  { /* This is how you comment in JSX */ }
    <h1 id = { myTitleID }>{ name }'s First React Element!</h1>
    <p className="main-desc">{ desc }</p>
  </header>
);

ReactDOM.render(
  header,
  document.getElementById('root')
);

console.log(title);
