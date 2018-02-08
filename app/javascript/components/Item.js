import React from "react"
import PropTypes from "prop-types"
class Item extends React.Component {
  constructor(){
    super();
    this.state = {
      editable: false
    }
  }

  handleEdit() {
    console.log(this.state.editable);
    if (this.state.editable) {
      let name = this.refs.name.value;
      let description = this.refs.description.value;
      let id = this.props.item.id;
      let item = { id:id, name:name, description:description };
      this.props.handleUpdate(item);
      console.log('in handleEdit', this.state.editable, name, description);
    }
    this.setState({ editable: !this.state.editable})
  }

  render () {
    let name = this.state.editable ? <input type='text' ref='name' defaultValue={this.props.item.name} /> : <h3>{this.props.item.name}</h3>;
    let description = this.state.editable ? <input type='text' ref='description' defaultValue={this.props.item.description} /> : <h3>{this.props.item.description}</h3>;
    return(
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <button onClick={this.props.handleDelete}>Delete</button>
        <button onClick={this.handleEdit.bind(this)}>{this.state.editable ? 'Submit' : 'Edit'}</button>
      </div>
    )
  }
}

export default Item
