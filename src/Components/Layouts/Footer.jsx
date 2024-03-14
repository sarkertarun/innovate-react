
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Logo from '../../assets/Logo.png'
import Paragraph from '../Paragraph'
import Heading from '../Heading'
import List from '../List'

const Footer = () => {
  return (
    <section className='bg-footerBgColor pt-[140px]'>
        <Container>
            <Flex>
            <div class="w-[449px] me-[93px]">
            <Image src={Logo} />
            <Paragraph text="Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page." className="text-servicepColor font-nunito text-[18px] font-regular leading-[32.4px] capitalize pt-[44px]"/>
            </div>
            <div className="w-[177px]">
            <Heading text="Features" className="text-bloghColor font-opensans text-[24px] font-semibold leading-[33.6px] pb-[48px]" as="h5"/>
            <ul>
            <List href="#" text="Home" className="text-servicepColor font-nunito text-[20px] font-semibold leading-[24px] capitalize pb-[30px]" />   
            <List href="#" text="About" className="text-servicepColor font-nunito text-[20px] font-semibold leading-[24px] capitalize pb-[30px]" />   
            <List href="#" text="Benifit" className="text-servicepColor font-nunito text-[20px] font-semibold leading-[24px] capitalize pb-[30px]" />   
            <List href="#" text="Pricing" className="text-servicepColor font-nunito text-[20px] font-semibold leading-[24px] capitalize pb-[30px]" />   
            <List href="#" text="Blog" className="text-servicepColor font-nunito text-[20px] font-semibold leading-[24px] capitalize pb-[30px]" />   
            </ul>
            </div>

            <div className="w-[250px] ">
            <Heading text="Products" className="text-bloghColor font-opensans text-[24px] font-semibold leading-[33.6px] pb-[48px]" as="h5"/>
            <ul>
            <List href="#" text="Task Management" className="text-servicepColor font-nunito text-[20px] font-semibold leading-[24px] capitalize pb-[30px]" />   
            <List href="#" text="Company growth" className="text-servicepColor font-nunito text-[20px] font-semibold leading-[24px] capitalize pb-[30px]" />   
            <List href="#" text="Time tracking" className="text-servicepColor font-nunito text-[20px] font-semibold leading-[24px] capitalize pb-[30px]" />   
           
            </ul>
            </div>

            <div className="w-[200px]">
            <Heading text="Support" className="text-bloghColor font-opensans text-[24px] font-semibold leading-[33.6px] pb-[48px]" as="h5"/>
            <ul>
            <List href="#" text="Customer service" className="text-servicepColor font-nunito text-[20px] font-semibold leading-[24px] capitalize pb-[30px]" />   
            <List href="#" text="Accessibility" className="text-servicepColor font-nunito text-[20px] font-semibold leading-[24px] capitalize pb-[30px]" />   
            <List href="#" text="Contact us" className="text-servicepColor font-nunito text-[20px] font-semibold leading-[24px] capitalize pb-[30px]" />   
           
            </ul>
            </div>
            </Flex>


            <div className='py-[57px]'>
            <ul>
           <Flex>
           <List href="#" text="@20201 Innovate.All rights reserved." className="text-servicepColor font-nunito text-[18px] font-regular leading-[32.4px] capitalize pr-[495px]" />   
            <List href="#" text="Privacy policy" className="text-servicepColor font-nunito text-[18px] font-regular leading-[32.4px] capitalize pr-[60px]" />   
            <List href="#" text="Terms & condition" className="text-servicepColor font-nunito text-[18px] font-regular leading-[32.4px] capitalize" />   
           </Flex>
            </ul>
            </div>
        </Container>
    </section>
  )
}

export default Footer