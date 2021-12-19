import { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function CheckBox({ initialChecked, label, onChange }) {
  const [isChecked, setIsChecked] = useState(initialChecked)
  const savedIsChecked = useRef(initialChecked)

  const id = uuidv4()
  const handleChange = (e) => setIsChecked(e.currentTarget.checked)

  useEffect(() => {
    if (savedIsChecked.current !== isChecked) {
      savedIsChecked.current = isChecked
      onChange(isChecked)
    }
  }, [isChecked, onChange])

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="checkbox"
        checked={isChecked}
        id={id}
        onChange={handleChange}
      />
    </div>
  )
}

export default CheckBox
