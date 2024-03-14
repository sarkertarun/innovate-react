import Container from '../Container'
import Image from '../Image'
import Groupbanner from '../../assets/Groupbanner.png'
import Heading from '../Heading'
import Button from '../Button'
import Flex from '../Flex'
import Paragraph from '../Paragraph'
import Creativeimg from '../../assets/creativeimg.png'


const Creative = () => {
  return (
    <section className="bg-white pt-[80px] pb-[100px]">
        <Container>
            <div className='relative'>
            <Image className="absolute left-[525px]" src={Groupbanner}/>
            <Heading text="Our creative process." as="h3" className="font-openSans text-[48px] font-extrabold text-center leading-normal pt-[80px]"/>
            <Paragraph className="text-servicepColor font-roboto text-lg font-regular  px-[370px]  text-center leading-8 pt-[20px]" text="We provide digital experience services to startups and small businesses."/>
            </div>
            
             
              <Flex className="justify-between pt-[52px]" >
                <div className="w-1/2 pt-[59px]">
                <div className="w-[465px] pl-[24px] bg-strategyColor rounded-[20px]">
                <Button text="Step-1" className="pt-[28px] pb-[23px] pl-[15px] text-strHeadColor text-[18px] font-opensans font-bold leading-[24px] inline-block  z-10 relative before:content-[''] before:absolute before:h-[33px] before:w-[33px] before:bg-roundBtn before:opacity-50 before:rounded-full before:top-[23px] before:left-[0px] before:-z-10 "/>
                <Heading text="Global SEO Research" as="h4" className="text-strHeadColor text-[30px] font-opensans font-semibold leading-9 pb-[20px]" />
                <Paragraph text="Practical tools and features make it easier to build and manage your site." className="text-servicepColor text-[18px] font-roboto font-regular leading-[30px] pb-[20px] pr-[90px]"/>
                </div>
                </div>
                <div className="w-1/2">
                <Image className="" src={Creativeimg}/>
                </div>
              </Flex>
              <Flex className="justify-between" >
                <div className="w-1/2">
                <Image className="" src={Creativeimg}/>
                </div>
                <div className="w-1/2 pt-[59px] ">
                <div className="w-[465px] pl-[24px]  ml-[100px] bg-socialColor rounded-[20px]">
                <Button text="Step-2" className="pt-[28px] pb-[23px] pl-[15px] text-strHeadColor text-[18px] font-opensans font-bold leading-[24px] inline-block  z-10 relative before:content-[''] before:absolute before:h-[33px] before:w-[33px] before:bg-roundBtn before:opacity-50 before:rounded-full before:top-[23px] before:left-[0px] before:-z-10 "/>
                <Heading text="Social media integration" as="h4" className="text-strHeadColor text-[30px] font-opensans font-semibold leading-9 pb-[20px]" />
                <Paragraph text="Practical tools and features make it easier to build and manage your site." className="text-servicepColor text-[18px] font-roboto font-regular leading-[30px] pb-[20px] pr-[90px]"/>
                </div>
                </div>
              </Flex>
              <Flex className="justify-between" >
                <div className="w-1/2 pt-[59px]">
                <div className="w-[465px] pl-[24px]  bg-contentColor rounded-[20px]">
                <Button text="Step-3" className="pt-[28px] pb-[23px] pl-[15px] text-strHeadColor text-[18px] font-opensans font-bold leading-[24px] inline-block  z-10 relative before:content-[''] before:absolute before:h-[33px] before:w-[33px] before:bg-roundBtn before:opacity-50 before:rounded-full before:top-[23px] before:left-[0px] before:-z-10 "/>
                <Heading text="Launching the Application" as="h4" className="text-strHeadColor text-[30px] font-opensans font-semibold leading-9 pb-[20px]" />
                <Paragraph text="Practical tools and features make it easier to build and manage your site." className="text-servicepColor text-[18px] font-roboto font-regular leading-[30px] pb-[20px] pr-[90px]"/>
                </div>
                </div>
                <div className="w-1/2">
                <Image className="" src={Creativeimg}/>
                </div>
              </Flex>
                
        </Container>
    </section>
  )
}

export default Creative