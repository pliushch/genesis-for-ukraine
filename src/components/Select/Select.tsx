import React from 'react';
import cn from 'classnames';
import styles from './Select.module.scss';

export type SelectProps = {
  className?: string;
  listClassName?: string;
  list: string[];
} & React.SelectHTMLAttributes<HTMLSelectElement>;

const Select = ({
  className = '',
  listClassName = '',
  name,
  list,
  value,
  onChange,
}: SelectProps) => (
  <select
    className={cn(styles.select, className)}
    name={name}
    id={name}
    value={value}
    onChange={onChange}
  >
    {list.map((item) => (
      <option value={item} className={cn(styles.item, listClassName)} key={item}>
        {item}
      </option>
    ))}
  </select>
);

export default Select;
