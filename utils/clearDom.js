const clearDom = () => {
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#entries').innerHTML = '';
  document.querySelector('#navigation').innerHTML = '';
  document.querySelector('#filters').innerHTML = '';
};

export default clearDom;
