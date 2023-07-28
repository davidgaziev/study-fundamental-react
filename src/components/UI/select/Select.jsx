import classes from './Select.module.css';

const Select = ({ options, defaultValue, onChange }) => {
  return (
    <select
      className={classes.postSelect}
      onChange={(e) => onChange(e.target.value)}
      defaultValue={'default'}
    >
      <option disabled value="default">
        {defaultValue}
      </option>

      {options.map((option) => [
        <option key={option.value} value={option.value}>
          {option.name}
        </option>,
      ])}
    </select>
  );
};

export default Select;
