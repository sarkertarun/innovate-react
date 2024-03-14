import React from 'react'
import Container from '../Container'
import Image from '../Image'
import Groupbanner from '../../assets/Groupbanner.png'
import Heading from '../Heading'
import List from '../List'
import Flex from '../Flex'
import Showone from "../../assets/showone.png"
import Showtwo from "../../assets/showtwo.png"
import Showthree from "../../assets/showthree.png"
import Showfour from "../../assets/showfour.png"
import Showfive from "../../assets/showfive.png"
import Showsix from "../../assets/showsix.png"

const Showcase = () => {
  return (
    <section className="bg-white pt-[80px] pb-[100px]">
        <Container>
            <div className='relative'>
            <Image className="absolute left-[525px]" src={Groupbanner}/>
            <Heading text="Work Showcase" as="h3" className="font-openSans text-[48px] font-extrabold text-center leading-normal pt-[80px]"/>
            </div>
            
            <div className='pt-[47px]'>
                <ul>
                <Flex >
                <List text="All" className="text-servicepColor font-openSans font-semibold text-2xl capitalize tracking-[0.5px] pr-[40px]"/>
                <List text="Digital Mkt" className="text-servicepColor font-openSans font-semibold text-2xl capitalize tracking-[0.5px] pr-[40px]"/>
                <List text="Branding" className="text-servicepColor font-openSans font-semibold text-2xl capitalize tracking-[0.5px] pr-[40px]"/>
                <List text="Content Mkt" className="text-servicepColor font-openSans font-semibold text-2xl capitalize tracking-[0.5px] pr-[40px]"/>
                <List text="Social Media Mkt" className="text-servicepColor font-openSans font-semibold text-2xl capitalize tracking-[0.5px]"/>
                </Flex>
                </ul>
            </div>
            <Flex className="pt-[52px] justify-between">
            <Image className="" src={Showone}/>
            <Image className="" src={Showtwo}/>
            <Image className="" src={Showthree}/>
            </Flex>
            <Flex  className="pt-[30px] justify-between">
            <Image className="" src={Showfour}/>
            <Image className="" src={Showfive}/>
            <Image className="" src={Showsix}/>
            </Flex>
        </Container>
    </section>
  )
}

export default Showcase