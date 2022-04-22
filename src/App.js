import "./App.scss";
import Switch from "./switch/Switch";

function App() {
  
  const handleChange = (checked) => {
    console.log(checked);
  };

  return (
    <div className="container">
      <div className="switch-wrapper">
        <Switch id="switch-default" onChange={handleChange} />
        <span className="title">Default</span>
      </div>
      <div className="switch-wrapper">
        <Switch
          id="switch-default-checked"
          defaultChecked
          onChange={handleChange}
        />
        <span className="title">Default checked</span>
      </div>
      <div className="switch-wrapper">
        <Switch disabled id="switch-disabled" onChange={handleChange} />
        <span className="title">Disabled</span>
      </div>
      <div className="switch-wrapper">
        <Switch
          defaultChecked
          disabled
          id="switch-checked-disabled"
          onChange={handleChange}
        />
        <span className="title">Checked disabled</span>
      </div>
      <div className="switch-wrapper">
        <Switch invalid id="switch-invalid" onChange={handleChange} />
        <span className="title">Invalid</span>
      </div>
    </div>
  );
}

export default App;
