import React from 'react'
import { DropdownContainer, DropdownUL, DropdownItem, DropdownButton, DropdownButtonText } from './style'
import { LuChevronDown } from 'react-icons/lu'


const Dropdown = ({ title, menu }: any) => {
  const [open, setOpen] = React.useState<boolean | string>("initial")

  const handleOpen = () => {
    if (open === "initial") {
      setOpen(true)
    } else {
      setOpen(!open)
    }
  }

  return (
    <DropdownContainer>
      <DropdownButton className='base-dropdown-btn' onClick={handleOpen}>
        <DropdownButtonText>{title}</DropdownButtonText>
        <LuChevronDown
          size={38}
          className={
            // eslint-disable-next-line no-nested-ternary
            open && open !== "initial" ? 'open' : (open !== "initial") ? 'closed' : ''
          } />
      </DropdownButton>
      {open && open !== "initial" ? (
        <DropdownUL>
          {menu.map((menuItem: any, index: number | string) => {
            return (
              menuItem?.type?.target === "button" ? (
                <DropdownItem key={index} onClick={() => {
                  menuItem.props.onClick()
                  setOpen(false)
                }}>
                  <DropdownButton style={{ marginTop: '1rem' }} $hoverStyle>
                    {menuItem.props.children}
                  </DropdownButton>
                </DropdownItem>
              ) : (
                <DropdownItem key={index}>{menuItem}</DropdownItem>
              )
            )
          })}
        </DropdownUL>
      ) : null}
    </DropdownContainer>
  )
}

export default Dropdown
