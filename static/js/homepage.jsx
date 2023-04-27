'use strict';

function Homepage() {
  return (
    <div>
        <p>Welcome to our page!</p>
        <p><a href="/cards">Click here to go to our cards page</a></p>
        <img src="/static/img/balloonicorn.jpg"></img>
    </div>
    );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
