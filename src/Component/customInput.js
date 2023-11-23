import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./customInput.css";

const TextInput = (props) => {
  const {
    type,
    name,
    value,
    onValueChange,
    label,
    error,
    onEnter,
    maxCharacters,
    reducedMargin,
    autoFillLabel,
    className,
    min,
    placeholder,
    disabled,
  } = props;
  return (
    <div
      className={`${styles.container} ${
        reducedMargin ? styles.reducedMargin : null
      } ${className}`}
    >
      <label htmlFor="input" className={"label"}>
        {label}
      </label>
      <input
        placeholder={placeholder}
        name={name}
        disabled={disabled}
        className={"textInput"}
        type={type}
        maxLength={maxCharacters}
        value={value}
        onChange={onValueChange}
        required //TODO: Remove this, use min or maybe value for :valid selector
        onKeyDown={(e) => e.key === "Enter" && onEnter && onEnter()}
        autoComplete={autoFillLabel}
        min={min}
      />

      <p className="errorMessage">{error && error}</p>
      {maxCharacters ? (
        <p className={styles.characterCount}>
          {value.length} / {maxCharacters}
        </p>
      ) : null}
    </div>
  );
};

export default TextInput;

TextInput.defaultProps = {
  type: "text",
};

TextInput.propTypes = {
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
};
