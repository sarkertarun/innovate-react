import Container from "../Container"
import Flex from "../Flex"
import Image from "../Image"
import Logo from '../../assets/Logo.png'
import List from '../List'
import Button from '../Button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  return (
    <nav className="py-7 bg-bannerBg relative z-40">
        <Container>
            <Flex className="items-center">
            <div className="w-[218px]">
            <Image src={Logo} alt=""/> 
          </div>
          <div className="w-[686px]">
            <ul>
              <Flex className="justify-between">
                <Flex>
                <List href="#" text="Home"  className="text-menuFontColor text-lg font-openSans font-semibold "/>
                <FontAwesomeIcon className="pt-2" icon={faAngleDown} />
                </Flex>
                <Flex>
                <List href="#" text="About" className="text-menuFontColor text-lg font-openSans font-semibold "/>
                <FontAwesomeIcon className="pt-2" icon={faAngleDown} />
                </Flex>
                <Flex>
                <List href="#" text="Service" className="text-menuFontColor text-lg font-openSans font-semibold "/>
                <FontAwesomeIcon className="pt-2" icon={faAngleDown} />
                </Flex>
                <Flex>
                <List href="#" text="Portfolio" className="text-menuFontColor text-lg font-openSans font-semibold "/>
                <FontAwesomeIcon className="pt-2" icon={faAngleDown} />
                </Flex>
                <Flex>
                <List href="#" text="Price" className="text-menuFontColor text-lg font-openSans font-semibold "/>
                <FontAwesomeIcon className="pt-2" icon={faAngleDown} />
                </Flex>
                <Flex>
                <List href="#" text="Blog" className="text-menuFontColor text-lg font-openSans font-semibold "/>
                <FontAwesomeIcon className="pt-2" icon={faAngleDown} />
                </Flex>
              </Flex>
            </ul>
          </div>
          <div className="w-[266px] text-right">
            <Button text="Contact Us" className="px-7 py-3.5 text-lg font-semibold font-openSans text-white bg-btnbgColor  rounded-full capitalize leading-9"/>
          </div>
            </Flex>
        </Container>
    </nav>
  )
}

export default Navbar