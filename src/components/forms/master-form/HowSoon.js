import React, { useState } from "react"
import { FormControl, Input, Select } from "@chakra-ui/react"
import data from "./data.json"

function HowSoon({ handleChange, index }) {
  const [selection, setSelection] = useState("")
  return (
    <Select
      bg="dark.50"
      placeholder="When do you plan to start your business?"
      fontSize={["xs", "sm", "md"]}
      color="gray.400"
      value={selection}
      size="lg"
      name={data[index].name}
      id={data[index].name}
      gridColumnStart={1}
      gridColumnEnd={3}
      onChange={e => {
        setSelection(e.target.value)
        handleChange(e.target.value, index)
      }}
    >
      <option value="This Month">This Month</option>
      <option value="Nect Month">Next Month</option>
      <option value="3 Months">3 months</option>
    </Select>
  )
}

export default HowSoon
