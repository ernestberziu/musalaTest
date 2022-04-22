import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

/**
 *
 * @param {String} variable varible name to create the redux state
 * @param {Object} initial  initial value of state
 * @param {Boolean} reInitialize  if you want to reinitialize when component reinitialized
 * @returns
 */
export const useRedux = (variable, initial, reInitialize) => {
  const dispatch = useDispatch();
  const e = useSelector(state => state.reducer);
  const setState = e => dispatch({type: variable, payload: e});
  useEffect(() => {
    if (initial && e[variable] !== initial && (reInitialize || !e[variable])) {
      setState(initial);
    }
  }, []);

  return [e[variable] !== undefined ? e?.[variable] : initial, setState];
};
