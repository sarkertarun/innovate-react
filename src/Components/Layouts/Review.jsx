import Container from '../Container'
import Image from '../Image'
import Groupbanner from '../../assets/Groupbanner.png'
import Heading from '../Heading'
import Flex from '../Flex'
import Paragraph from '../Paragraph'
import Clientimg from '../../assets/clientimg.png'
import Clientgroup from '../../assets/clientgroup.png'
import Leftbtn from '../../assets/leftbtn.png'
import Rightbtn from '../../assets/rightbtn.png'

const Review = () => {
  return (
    <section className="bg-reviewbgColor py-[100px]">
        <Container>
           <Flex className="justify-between">
            <div className='w-[370px] relative'>
            <Image className="absolute left-0" src={Groupbanner}/>
            <Heading text="Client Review" as="h3" className="font-openSans text-[48px] font-extrabold leading-normal pt-[80px]"/>
            <Paragraph className="text-servicepColor font-paprika text-lg font-regular leading-8 pt-[20px] pr-[30px]" text="people use digital devices instead of visiting physical shops, digital marketing campaigns are becoming more prevalent and efficient.  "/>
            <Flex>
            <Image className="mt-[15px] mr-[20px]" src={Leftbtn}/>
            <Image className="mt-[15px]" src={Rightbtn}/>
            </Flex>
            </div>

            <div className='group'>
             <div className="w-[370px] pl-[40px] pr-[60px] bg-white  rounded-[20px] relative group-hover:bg-socialColor">
              <Paragraph text="Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient." className="text-servicepColor text-[18px] font-paprika font-regular leading-[30px] pt-[25px] pb-[15px] group-hover:bg-socialColor"/>
                <Flex>
                <Image className="group-hover:bg-socialColor pb-[40px]" src={Clientimg}/>
                <div>
                  <Heading text="Jane Cooper" as="h5" className="text-strHeadColor text-[24px] font-opensans font-semibold leading-9 pl-[20px] pt-[20px] group-hover:bg-socialColor" />
                 <Paragraph text="Fashion Designer" className="text-strHeadColor text-[18px] font-opensans font-regular leading-normal pl-[20px] group-hover:bg-socialColor"/>
                 </div>
                </Flex>
                <Image className="absolute bottom-[45px] left-[110px] rounded-full group-hover:bg-socialColor" src={Clientgroup}/>
             </div>
            </div>

            <div className='group'>
             <div className="w-[370px] pl-[40px] pr-[60px] bg-white  rounded-[20px] relative group-hover:bg-socialColor">
              <Paragraph text="Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient." className="text-servicepColor text-[18px] font-paprika font-regular leading-[30px] pt-[25px] pb-[15px] group-hover:bg-socialColor"/>
                <Flex>
                <Image className="group-hover:bg-socialColor pb-[40px] inline-block" src={Clientimg}/>
                <div>
                  <Heading text="Eleanor Pena" as="h5" className="text-strHeadColor text-[24px] font-opensans font-semibold leading-9 pl-[20px] pt-[20px] group-hover:bg-socialColor" />
                 <Paragraph text="Architecture" className="text-strHeadColor text-[18px] font-opensans font-regular leading-normal  pl-[20px] group-hover:bg-socialColor"/>
                 </div>
                </Flex>
                <Image className="absolute bottom-[45px] left-[110px] rounded-full group-hover:bg-socialColor" src={Clientgroup}/>
             </div>
            </div>
           </Flex>        
        </Container>
    </section>
  )
}

export default Review