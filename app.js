class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      done: false,
      bold: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.turnBold = this.turnBold.bind(this);
  }

  turnBold(e) {
    e.preventDefault();
    console.log(e);
    this.setState({
      bold: !this.state.bold
    });
    console.log('bold should be true: ', this.state.bold);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      done: !this.state.done
    });
    console.log('The item was clicked.');
  }

  render() {
    var styles = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.bold ? 'bold' : 'normal'
    };
    return (
      <li style={styles} onClick={this.handleClick.bind(this)} onMouseOver={this.turnBold.bind(this)}>{this.props.item}</li>
    );
  }

};

var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
    <GroceryListItem key={item.id} item={item}  />
    )}
  </ul>
);

var App = () => (
  <div>hello world
    <h2>Hannah's Grocery List</h2>
    <GroceryList items={['bananas', 'milk', 'sausage', 'pizza', 'cucumbers']}/>
  </div>

);

ReactDOM.render(<App />, document.getElementById("app"));

