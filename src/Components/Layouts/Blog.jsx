import Container from '../Container'
import Image from '../Image'
import Groupbanner from '../../assets/Groupbanner.png'
import Heading from '../Heading'
import Button from '../Button'
import Flex from '../Flex'
import Paragraph from '../Paragraph'
import Blogimg from '../../assets/blogimg.png'

const Blog = () => {
  return (
    <section className="bg-blogBgColor pt-[80px] pb-[118px]">
        <Container>
            <div className='relative'>
            <Image className="absolute left-[525px]" src={Groupbanner}/>
            <Heading text="Our Latest Blog" as="h3" className="font-openSans text-[48px] font-extrabold text-center leading-normal pt-[80px]"/>
            <Paragraph className="text-servicepColor font-roboto text-lg font-regular  px-[370px]  text-center leading-8 pt-[20px]" text="We provide digital experience services to startups and small businesses."/>
            </div>
            
             
              <Flex className="justify-between pt-[52px]" >
                <div className="w-[370px] ">
                <div className=" bg-white rounded-[20px]">
                <Image className="" src={Blogimg}/>
                <Heading text="How to Be Ahead of Stock Changes" as="h4" className="text-bloghColor text-[24px] font-work font-semibold leading-9 pt-[30px] pl-[30px] pr-[116px] pb-[16px]" />
                <Paragraph text="By John  - 5 Comments" className="text-servicepColor text-[18px] font-roboto font-regular leading-[30px] pl-[30px] pb-[20px] "/>
                <Button text="Read more" className=" pb-[30px] pl-[45px] text-strHeadColor text-[18px] font-opensans font-bold leading-[24px] inline-block  z-10 relative before:content-[''] before:absolute before:h-[33px] before:w-[33px] before:bg-roundBtn before:opacity-50 before:rounded-full before:top-[-5px] before:left-[30px] before:-z-10 "/>
                </div>
                </div>
                <div className="w-[370px] ">
                <div className=" bg-white rounded-[20px]">
                <Image className="" src={Blogimg}/>
                <Heading text="Online Reputation And Management" as="h4" className="text-bloghColor text-[24px] font-work font-semibold leading-9 pt-[30px] pl-[30px] pr-[116px] pb-[16px]" />
                <Paragraph text="By Amin  - 10 Comments" className="text-servicepColor text-[18px] font-roboto font-regular leading-[30px] pl-[30px] pb-[20px] "/>
                <Button text="Read more" className=" pb-[30px] pl-[45px] text-strHeadColor text-[18px] font-opensans font-bold leading-[24px] inline-block  z-10 relative before:content-[''] before:absolute before:h-[33px] before:w-[33px] before:bg-roundBtn before:opacity-50 before:rounded-full before:top-[-5px] before:left-[30px] before:-z-10 "/>
                </div>
                </div>
                <div className="w-[370px] ">
                <div className=" bg-white rounded-[20px]">
                <Image className="" src={Blogimg}/>
                <Heading text="Tips To Move Your Project More Forward" as="h4" className="text-bloghColor text-[24px] font-work font-semibold leading-9 pt-[30px] pl-[30px] pr-[68px] pb-[16px]" />
                <Paragraph text="By Insider  - 15 Comments" className="text-servicepColor text-[18px] font-roboto font-regular leading-[30px] pl-[30px] pb-[20px] "/>
                <Button text="Read more" className=" pb-[30px] pl-[45px] text-strHeadColor text-[18px] font-opensans font-bold leading-[24px] inline-block  z-10 relative before:content-[''] before:absolute before:h-[33px] before:w-[33px] before:bg-roundBtn before:opacity-50 before:rounded-full before:top-[-5px] before:left-[30px] before:-z-10 "/>
                </div>
                </div>
              </Flex>
              
                
        </Container>
    </section>
  )
}

export default Blog