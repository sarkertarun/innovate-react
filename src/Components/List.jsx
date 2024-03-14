
const List = ({text,href,className}) => {
    return (
      <li><a className={`${className}  inline-block pr-2 hover:text-menuHoverColor`} href={href}>{text}</a></li>
    )
  }

export default List