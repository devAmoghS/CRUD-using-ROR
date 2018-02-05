import React from "react"
import PropTypes from "prop-types"
import $ from "jquery"

class NewItems extends React.Component {
  handleClick() {
    let name = this.refs.name.value;
    let description = this.refs.description.value;
    $.ajax({
      url: '/api/v1/items',
      type: 'POST',
      data: { item: { name:name, description:description }},
      success: (item) => {
        this.props.handleSubmit(item);
      }
    });
  }

  render () {
    return(
      <div>
        <input ref='name' placeholder='Enter the name of the item' />
        <input ref='description' placeholder='Enter a description' />
        <button onClick={this.handleClick.bind(this)}>Submit</button>
      </div>
    );
  }
}

export default NewItems
