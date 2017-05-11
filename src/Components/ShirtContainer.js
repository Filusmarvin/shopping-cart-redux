import { connect } from 'react-redux'
import ShirtList from './Shirts.js'

const mapStateToProps = (state) => {
  return{
    shirts: state.shirts,
    cartItems: state.cartItems,
    shirtTypes: state.shirtType
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    addShirt: (index) => {dispatch({type: 'ADD_SHIRT', index })},
    removeShirt: (index) => {dispatch({type: 'REMOVE_SHIRT', index })}
  }
}
const ShirtContainer = connect(mapStateToProps,mapDispatchToProps)(ShirtList)

export default ShirtContainer
