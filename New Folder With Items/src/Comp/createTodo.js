import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CreateTodo, DeleteTodo } from '../redux/Action/ActionGenrators';
import { v4 as uuid } from 'uuid';

export class createTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { content } = this.state;
    content !== ''
      ? this.props.dispatch(
          CreateTodo({
            content: content,
            id: uuid(),
          })
        )
      : alert('please put something inside');
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='content'
            value={this.state.content}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
        <div>
          {this.props.todos.map(({ content, id }) => (
            <h1 key={id}>{content}</h1>
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  todos: state.todos,
});
export default connect(mapStateToProps)(createTodo);

//=>to use state inside of any lower component so that why we call maptoprops as high order componejnt
// multiplication(21)(23)
// const multi=(num)=>{

//     return (num1)=>{
//         return num*num1
//     }
// }
