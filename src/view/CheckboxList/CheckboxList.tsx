import React from "react";

type Props = {
  list: string[];
  onClickCheckbox: (index: number, checked: boolean) => void;
};

const CheckboxList: React.SFC<Props> = props => (
  <ul>
    {props.list.map((data, i) => (
      <li>
        <label>
          <input
            type="checkbox"
            value={i}
            onClick={e => {
              const v = e.target as HTMLInputElement;
              props.onClickCheckbox(i, v.checked);
            }}
          />
          {data}
        </label>
      </li>
    ))}
  </ul>
);

export default CheckboxList;
