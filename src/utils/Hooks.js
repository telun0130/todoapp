import { useState } from "react";

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  return [{value, onChange: event => setValue(event.target.value)},
    () => setValue(initialValue)
  ];
}