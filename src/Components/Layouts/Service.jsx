import Container from "../Container"
import Flex from "../Flex"
import Heading from "../Heading"
import Paragraph from "../Paragraph"

import Image from "../Image"
import Strategy from '../../assets/strategy.png'

import Groupbanner from '../../assets/Groupbanner.png'
import Button from "../Button"


const Service = () => {
  return (
    <section className="bg-servicebg pt-[141px] pb-[100px] ">
        
        
    <Container>
        <div className="relative">
        <Image className="absolute top-[-80px] left-[525px]" src={Groupbanner} />
        </div>
    <Heading text="Our Services" as="h3" className="font-openSans text-[48px] font-extrabold leading-normal text-center"/>
    <Paragraph className="text-servicepColor font-paprika text-lg font-regular  px-[430px]  text-center leading-8" text="We have been providing great flooring solutions service."/>

     <Flex className="justify-between pt-[52px]">
     <div className="w-[370px] py-[55px] px-[45px] bg-strategyColor rounded-[20px] text-center">
        <Image className="inline-block pb-[28px]" src={Strategy}/>

        <Heading text="Marketing Strategy" as="h4" className="text-strHeadColor text-[30px] font-opensans font-semibold leading-9 pb-[20px]" />

        <Paragraph text="Social Media has changed the way we interact & do business while creating" className="text-servicepColor text-[18px] font-paprika font-regular leading-[30px]"/>

        <Button text="Read more" className="pt-[24px] text-strHeadColor text-[18px] font-opensans font-bold leading-[24px] inline-block  z-10 relative before:content-[''] before:absolute before:h-[33px] before:w-[33px] before:bg-roundBtn before:opacity-50 before:rounded-full before:top-[19px] before:left-[-17px] before:-z-10 "/>
     </div>
     <div className="w-[370px] py-[55px] px-[45px] bg-socialColor rounded-[20px] text-center">
        <Image className="inline-block pb-[28px]" src={Strategy}/>

        <Heading text="Social Marketing" as="h4" className="text-strHeadColor text-[30px] font-opensans font-semibold leading-9 pb-[20px]" />

        <Paragraph text="Social Media has changed the way we interact & do business while creating" className="text-servicepColor text-[18px] font-paprika font-regular leading-[30px]"/>

        <Button text="Read more" className="pt-[24px] text-strHeadColor text-[18px] font-opensans font-bold leading-[24px] inline-block  z-10 relative before:content-[''] before:absolute before:h-[33px] before:w-[33px] before:bg-roundBtn before:opacity-50 before:rounded-full before:top-[19px] before:left-[-17px] before:-z-10 "/>
     </div>
     <div className="w-[370px] py-[55px] px-[45px] bg-contentColor rounded-[20px] text-center">
        <Image className="inline-block pb-[28px]" src={Strategy}/>

        <Heading text="Content Marketing" as="h4" className="text-strHeadColor text-[30px] font-opensans font-semibold leading-9 pb-[20px]" />

        <Paragraph text="Social Media has changed the way we interact & do business while creating" className="text-servicepColor text-[18px] font-paprika font-regular leading-[30px]"/>

        <Button text="Read more" className="pt-[24px] text-strHeadColor text-[18px] font-opensans font-bold leading-[24px] inline-block  z-10 relative before:content-[''] before:absolute before:h-[33px] before:w-[33px] before:bg-roundBtn before:opacity-50 before:rounded-full before:top-[19px] before:left-[-17px] before:-z-10 "/>
     </div>
     </Flex>
    </Container>
    </section>
  )
}

export default Service