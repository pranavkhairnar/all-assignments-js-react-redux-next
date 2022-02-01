import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';


export const Shop = () => {
  const dispatch = useDispatch();
const actions = bindActionCreators(actionCreators, dispatch);
  return <div>
  <h2>Cash</h2>
      <button className="btn btn-primary mx-2" onClick={() => {actions.withdrawMoney(100)}}>- [Withdraw] </button>
      Update Balance
      <button className="btn btn-primary mx-2" onClick={() => {actions.depositMoney(100)}}>+ [Deposit]</button>

  </div>;
};

/*
import React from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from './state/index';

export const Shop = () => {
  const dispatch = useDispatch();

  return <div>
  <h2>Cash</h2>
      <button className="btn btn-primary mx-2" onClick={() => {dispatch(actionCreators.withdrawMoney(100))}}>- [Withdraw] </button>
      Update Balance
      <button className="btn btn-primary mx-2" onClick={() => {dispatch(actionCreators.depositMoney(100))}}>+ [Deposit]</button>

  </div>;
};

*/
