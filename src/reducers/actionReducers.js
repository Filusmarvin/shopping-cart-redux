// {
//   if (state.cartItems !== 0){
//     state.cartItems - 1}
//   } else {
//     return state.cartItems
//   }
// }



const initialState = {
  cartItems: 0,
  shirts:[],
  shirtType: [
    {
      name: 'Goku',
      src: './images/Goku.jpg',
      color: 'Blue',
      size: 'Small',
      price: '45'
    },
    {
      name: 'Naruto',
      src: './images/Naruto.png',
      color: 'Orange',
      size: 'Medium',
      price: '15'
    },
    {
      name: 'Luffy',
      src: './images/Luffy.jpg',
      color: 'blue',
      size: 'Small',
      price: '29'
    },
    {
      name: 'Natsu',
      src: './images/Natsu.png',
      color: 'Orange',
      size: 'Small',
      price: '19'
    }
  ]
}

export default function reducer (state = initialState, action){
  switch(action.type){
    case 'ADD_SHIRT':
    let shirt = state.shirtType[action.index]
      return{ ...state,
      shirts: [...state.shirts, shirt ],
      cartItems: state.cartItems + 1 }

    case 'REMOVE_SHIRT':
    let minus = state.cartItems === 0 ? 0 : 1
      return{...state,
      shirts:state.shirts.filter((_,index) => index !== action.index),
      cartItems: state.cartItems - minus
    }
    default:
    return state
  }
}
