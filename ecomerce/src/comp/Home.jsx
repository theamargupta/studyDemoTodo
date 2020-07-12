import React, { Component } from 'react';
import { connect } from 'react-redux';
import data from '../data/data';
import { addProduct } from '../redux/actionGenerator/Genrators';

class Home extends Component {
  componentDidMount() {
    data.map((data) => this.props.dispatch(addProduct(data)));
  }

  render() {
    //console.log(this.props.product);
    return (
      <div>
        {this.props.product.product.map((data) => (
          <h1 key={data.id}>{data.title}</h1>
        ))}
      </div>
    );
    // ;
  }
}
const mapStateToProps = ({ oAuthReducer, productReducer }) => ({
  oauth: oAuthReducer,
  product: productReducer,
});
export default connect(mapStateToProps)(Home);
