import React from 'react';

export default function Header(props) {
  
    return (
    <div>
    <header className="block row center">
      <div>
        <a href="#/">
          <h1>Shopping Cart</h1>
        </a>
      </div>
      <div>
        <a href="#/cart" onClick={()=>props.popup(true)}>
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href="#/signin"> Username</a>
      </div>
    </header>
    </div>
  );
}