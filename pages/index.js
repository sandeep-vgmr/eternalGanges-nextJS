import React from 'react';
import Layout from '../layouts/Main'
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement } from '@/redux/actions/countAction';

const index = () => {

  const dispatch = useDispatch()

  const { count } = useSelector((state) => state.count)

  return (
    <Layout>
      <div className='text-center'>
        <h3>Welcome in Enternal Ganges...</h3>
        <button onClick={() => dispatch(increment())}>+</button><strong>{count}</strong>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </Layout>
  )
}

export default index;