import React from "react"
import PropTypes from "prop-types"
import AllItems from "./AllItems"
import NewItems from "./NewItems"

class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    $.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response}) });
  }

  handleSubmit(item) {
    let newState = this.state.items.concat(item);
    this.setState({ items: newState })
  }

  handleUpdate(item) {
    $.ajax({
      url: '/api/v1/items/${item.id}',
      type: 'PUT',
      data: { item: item},
      success: () => {
        console.log("Items updated");
        this.updateItems(item);
      }
    })
  }

  updateItems(item) {
    let items = this.state.items.filter((i) => {
      return i.id != item.id
    });
    items.push(item);
    this.setState({items: items});
  }

  handleDelete() {
    $.ajax({
      url: '/api/v1/items/${id}',
      type: 'DELETE',
      success:() => {
        this.removeClient(id);
      }
    });
  }

  removeClient(id) {
    let newItems = this.state.item.filter((item) => {
      return item.id != id;
    });

    this.setState({ items: newItems });
  }

  render () {
    return(
      <div>
        <NewItems handleSubmit={this.handleSubmit.bind(this)}/>
        <AllItems items={this.state.items} handleDelete={this.handleDelete.bind(this)} onUpdate={this.handleUpdate.bind(this)}/>
      </div>
    );
  }
}

export default Body
