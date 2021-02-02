function GroceryListItem(props) {

  function handleClick(e) {
    e.preventDefault();
    console.log('The item was clicked.');
  }

  return (
    <li onClick={handleClick}>{props.item}
    </li>
  );

  };

var GroceryList = (props) => (
  <ul>
    {props.items.map(item => {
      return (
        <GroceryListItem key={item.id} item={item} />
      );
    })}
  </ul>
);

var App = () => (
  <div>hello world
    <h2>Hannah's Grocery List</h2>
    <GroceryList items={['bananas', 'milk', 'sausage', 'pizza', 'cucumbers']}/>
  </div>

);

ReactDOM.render(<App />, document.getElementById("app"));
