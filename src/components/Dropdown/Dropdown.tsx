import React, { ReactElement } from 'react'
import "./Dropdown.scss"
import Arrow from "./../../theme/images/arrow.svg"
// import { LuChevronDown } from 'react-icons/lu'

type DropdownProps = {
  title: string
  menu: ReactElement[] | string[]
}

const Dropdown = ({ title, menu }: DropdownProps) => {
  const [open, setOpen] = React.useState<boolean | string>("initial")

  const handleOpen = () => {
    if (open === "initial") {
      setOpen(true)
    } else {
      setOpen(!open)
    }
  }

  return (
    <div className='dropdown-container'>
      <button className='dropdown-button base-dropdown-btn' onClick={handleOpen}>
        <span className='dropdown-button-text'>{title}</span>
        <img
          src={Arrow}
          alt=""
          className={`arrow 
            ${
            // eslint-disable-next-line no-nested-ternary
            open && open !== "initial" ? 'open' : (open !== "initial") ? 'closed' : ''
            }
          `} />
      </button>
      {open && open !== "initial" ? (
        <ul className={`dropdown-ul ${open !== "initial" && !open ? "close" : ""}`}>
          {menu.map((menuItem: ReactElement | string, index: number | string) => {
            return (
              // menuItem?.type?.target === "button" ? (
              //   <li className='dropdown-item' key={index} onClick={() => {
              //     menuItem.props.onClick()
              //     setOpen(false)
              //   }}>
              //     <button className='dropdown-button' style={{ marginTop: '1rem' }}>
              //       {menuItem.props.children}
              //     </button>
              //   </li>
              // ) : (
              //    <li className='dropdown-item' key={index}>{menuItem}</li>
              //   )
              <li className='dropdown-item' key={index}>{menuItem}</li>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}

export default Dropdown
