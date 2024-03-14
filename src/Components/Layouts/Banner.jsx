import Container from "../Container"
import Flex from "../Flex"
import Heading from "../Heading"
import Paragraph from "../Paragraph"
import Button from "../Button"
import Image from "../Image"
import Womenele from '../../assets/womenele.png'
import elements from '../../assets/elements.png'
import imageone from '../../assets/imageone.png'
import imagetwo from '../../assets/imagetwo.png'
import Groupbanner from '../../assets/Groupbanner.png'

const Banner = () => {
  return (
    <section className="bg-bannerBg pt-[180px] pb-[207px] relative">
        <Image className="absolute top-[60px] left-[80px]" src={Womenele} />
        <Image className="absolute top-[-120px] left-0" src={elements} />

    <Container>
     <Flex className="relative">
     <Image className="absolute top-[-60px] left-0" src={Groupbanner} />
     <div className="w-[686px]">
    <Heading text="We Are Digital #Marketing# Agency" as="h1" className="font-openSans text-7xl font-extrabold leading-normal"/>

    <Paragraph className="text-bannerp font-regular pt-9 pl-2.5 pr-36" text="Use customer data to build great and solid product experiences that convert. Digital marketing’s development has changed the way brands and businesses use technology for marketing. " />

    <Button text="get free quoto" className=" text-xl font-bold py-5 px-10 gap-2.5 ml-2.5 mt-[76px] font-openSans text-white bg-btnbgColor  rounded-full capitalize leading-9" />
      
    </div>
    <div className="w-[484px]">
    <Image className="absolute left-[725px] top-[235px] z-20" src={imageone} />
    <Image className="absolute left-[1000px] top-[-40px] z-10" src={imagetwo} />
    </div>

     </Flex>
    </Container>
    </section>
  )
}

export default Banner