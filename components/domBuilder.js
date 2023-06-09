import renderToDom from '../utils/renderToDom';

const domBuilder = () => {
  const domString = `
    <div id="main-container">
    <div id="navigation"></div>
    <div id="form-container"></div>
    <div id="entries"></div>
    </div>`;
  renderToDom('#app', domString);
};

export default domBuilder;
