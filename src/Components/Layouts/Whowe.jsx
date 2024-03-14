import Container from "../Container"
import Flex from "../Flex"
import Image from "../Image"
import Whoimg from "../../assets/whoimg.png"
import Whoimgtwo from "../../assets/whoimgtwo.png"
import Whoelement from "../../assets/whoelement.png"
import Groupbanner from '../../assets/Groupbanner.png'
import Heading from "../Heading"
import Paragraph from "../Paragraph"
import Wapkiu from "../../assets/wapkiu.png"
import Creone from "../../assets/creone.png"
import Rinfal from "../../assets/rinfal.png"
import Ulabs from "../../assets/ulabs.png"
import Spiders from "../../assets/spiders.png"
import Widegde from "../../assets/widegde.png"

const Whowe = () => {
  return (
    <section className="bg-whobg pt-[100px] pb-[260px]">
        <Container>
            <Flex>
                <div className="w-1/2 relative">
                    <Image className="absolute left-[110px] z-[12]" src={Whoimg} />
                    <Image className="absolute left-0 top-[290px] z-[15]" src={Whoimgtwo} />
                    <Image className="absolute left-0 top-[125px] z-[11] " src={Whoelement} />
                </div>
                <div className="w-1/2 pl-[129px] relative">
                <Image className="absolute top-0 left-[129px]" src={Groupbanner} />
                <Heading text="Who We Are" as="h3" className="font-openSans text-[48px] font-extrabold leading-normal pt-[80px]"/>
                <Paragraph text="We are a Dhaka based Digital Communication Agency committed to creating an actionable strategy, online marketing & technology solution for our partners. As a multidisciplinary company, we operate as a unified, " className="text-servicepColor text-[18px] font-paprika font-regular leading-[30px] pt-[15px] pr-[20px]"/>
                <Paragraph text="Join the 10.000+ Companys Trusting " className="text-servicepColor text-[12px] font-paprika font-regular leading-[30px]"/>
                <Image className="absolute left-[129px] top-[420px]" src={Wapkiu}/>
                <Image className="absolute left-[286px] top-[420px]" src={Creone}/>
                <Image className="absolute left-[449px] top-[420px]" src={Rinfal}/>
                <Image className="absolute left-[129px] top-[480px]" src={Ulabs}/>
                <Image className="absolute left-[286px] top-[480px]" src={Spiders}/>
                <Image className="absolute left-[449px] top-[480px]" src={Widegde}/>

                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Whowe