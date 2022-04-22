import React, { useState } from "react";

const Switch = ({ id, disabled, defaultChecked, invalid, onChange }) => {
  const [checked, setChecked] = useState(defaultChecked || false);

  function handleKeyDown(e) {
    if (e.keyCode !== 32 && e.keyCode !== 13) return;
    e.preventDefault();
    handleChange();
  }

  const handleChange = () => {
    onChange(!checked);
    setChecked(!checked);
  };

  return (
    <>
      <input
        checked={checked}
        role="switch"
        aria-label="Toggle switch"
        onChange={handleChange}
        className={`switch-checkbox ${invalid ? "invalid" : ""}`}
        id={id}
        type="checkbox"
        disabled={disabled}
      />
      <label
        className="switch-label"
        htmlFor={id}
        onKeyDown={(e) => handleKeyDown(e)}
        tabIndex={disabled ? -1 : 1}
      >
        <span className="switch-button" />
      </label>
    </>
  );
};

export default Switch;
