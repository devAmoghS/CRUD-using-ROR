import React from "react"
import PropTypes from "prop-types"
import $ from "jquery"
import Item from "./Item"

class AllItems extends React.Component {

  onUpdate(item) {
    this.props.onUpdate(item);
  }

  handleDelete(id) {
    this.props.handleDelete(id);
  }

  render () {
    let items = this.props.items.map((item) => {
      return(
        <div key={item.id}>
          <Item item={item}
                handleEdit={this.handleEdit}
                handleDelete={this.handleDelete.bind(this, item.id)}
                handleUpdate={this.onUpdate.bind(this)}/>
        </div>
      )
    });

    return(
      <div>
        {items}
      </div>
    );
  }
}

export default AllItems
