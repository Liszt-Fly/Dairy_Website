import { area, category, Data, Image, TechnologyInfo } from "./type"
import { CowBrand, MilkBrand } from "./util"

export const ImageDataArray: Image[] = [
    {
        title: "Angeln cattle, Germany",
        location: area.EUROPE,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/wGgSFA.jpg",
        category: category.COWBREED

    },
    {
        title: "Holstein, Netherlands",
        location: area.EUROPE,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/E29YuG.jpg",
        category: category.COWBREED
    },
    {
        title: "Polish Red Bull, Poland",
        location: area.EUROPE,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/Syd0CY.jpg",
        category: category.COWBREED
    },
    {
        title: "Kostroma, Russia",
        location: area.EUROPE,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/mSBDcx.jpg",
        category: category.COWBREED
    },
    {
        title: "Shorthorn, Britain",
        location: area.EUROPE,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/hYDwde.jpg",
        category: category.COWBREED
    }, {
        title: "Swiss brown cattle, Swiss",
        location: area.EUROPE,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/b5O2Ag.jpg",
        category: category.COWBREED
    },
    {
        title: "Xinjiang brown cattle, China",
        location: area.ASIA,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/DZ40vQ.jpg",
        category: category.COWBREED
    },
    {
        title: "Chinese Holstein, China",
        location: area.ASIA,
        category: category.COWBREED,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/ZBjrQL.jpg"
    },
    {
        title: "Buffalo, China",
        location: area.ASIA,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/rtMTAf.jpg",
        category: category.COWBREED
    },
    {
        title: "Yak, Tibet, China",
        location: area.ASIA,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/YlxvjJ.jpg",
        category: category.COWBREED
    },
    {
        title: "Mongolian goat, Mongolia",
        location: area.ASIA,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/4N42ai.jpg",
        category: category.COWBREED
    },
    {
        title: "Horse, Mongolia",
        location: area.ASIA,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/4N42ai.jpg",
        category: category.COWBREED
    },
    {
        title: "Holstein, Japan",
        location: area.ASIA,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/4N42ai.jpg",
        category: category.COWBREED
    },
    {
        title: "Jersey, Japan",
        location: area.ASIA,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/HTpnA0.jpg",
        category: category.COWBREED
    },
    {
        title: "Brown Swiss, Japan",
        location: area.ASIA,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/YGR5pK.jpg",
        category: category.COWBREED
    },
    {
        title: "Holstein, Korea",
        location: area.ASIA,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/xPiUUa.jpg",
        category: category.COWBREED
    },
    {
        title: "Holstein, Indonesia",
        location: area.ASIA,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/etCktS.jpg",
        category: category.COWBREED
    },
    {
        title: "Red steppe, Kazakhstan",
        location: area.ASIA,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/Xl0NuW.jpg",
        category: category.COWBREED
    },
    {
        title: "Alatau, Kazakhstan",
        location: area.ASIA,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/Isq70E.jpg",
        category: category.COWBREED
    },
    {
        title: "Nili-ravi buffalo, Pakistan",
        location: area.ASIA,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/hzH78u.jpg",
        category: category.COWBREED
    },
    {
        title: "Jersey, America",
        location: area.NORTH_AMERICA,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/Idlncv.jpg",
        category: category.COWBREED
    },
    {
        title: "Holstein, Canada",
        location: area.NORTH_AMERICA,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/WNjy9w.jpg",
        category: category.COWBREED
    },
    {
        title: "Red and White Holstein, America",
        location: area.NORTH_AMERICA,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/5scO7s.jpg",
        category: category.COWBREED
    },
    {
        title: "Corriente, Mexico",
        location: area.NORTH_AMERICA,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/qdGnlD.jpg",
        category: category.COWBREED
    },
    {
        title: "Corriente, Mexico",
        location: area.NORTH_AMERICA,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/qdGnlD.jpg",
        category: category.COWBREED
    },
    {
        title: "Uruguayan Holstein, Uruguay",
        location: area.SOUTH_AMERICA,
        category: category.COWBREED,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/F0g7ot.jpg"
    }, {
        title: "Girolando, Brazil",
        location: area.SOUTH_AMERICA,
        category: category.COWBREED,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/rf68Yr.jpg"
    },
    {
        title: "Holstein-Friesian, Chile",
        location: area.SOUTH_AMERICA,
        category: category.COWBREED,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/2HeOqu.jpg"
    },
    {
        title: "Simmental, South Africa",
        location: area.AFRICA,
        category: category.COWBREED,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/B78Soq.jpg"
    },

    {
        title: "Australian Holstein, Australia",
        location: area.OCEANIA,
        category: category.COWBREED,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/8GtDWD.jpg"
    },
    {
        title: "Illawarra, Australia",
        location: area.OCEANIA,
        category: category.COWBREED,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/Qr6nzk.jpg"
    },
    {
        title: "Australian Friesian Sahiwal (AFS), Australia",
        location: area.OCEANIA,
        category: category.COWBREED,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/LDDIhz.jpg"
    },
    {
        title: "Australian Milking Zebu (AMZ), Australia",
        location: area.OCEANIA,
        category: category.COWBREED,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/Scs17K.jpg"
    },
    {
        title: "Australian Red, Australia",
        location: area.OCEANIA,
        category: category.COWBREED,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/DeFHXP.jpg"
    },
    {
        title: "Kiwi-Cross, New Zealand",
        location: area.OCEANIA,
        category: category.COWBREED,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/Wf16jI.jpg"
    },
    {
        title: "Holstein-Friesian, New Zealand",
        location: area.OCEANIA,
        category: category.COWBREED,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/utqKTd.jpg"
    },
    {
        title: "Jersey, New Zealand",
        location: area.OCEANIA,
        category: category.COWBREED,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/4S3SRk.jpg"
    },
    {
        title: "Oldenburger milk products, Germany",
        location: area.EUROPE,
        category: category.MILKBRAND,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/mvhcAr.jpg"
    },
    {
        title: "Töpfer products, Germany",
        location: area.EUROPE,
        category: category.MILKBRAND,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/xXUtix.jpg"
    },
    {
        title: "Sternenfair milk products, Germany",
        location: area.EUROPE,
        category: category.MILKBRAND,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/VESxu8.jpg"
    },
    {
        title: "Hochwald milk products, Germany",
        location: area.EUROPE,
        category: category.MILKBRAND,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/XVWL9c.jpg"
    },
    {
        title: "Mukki milk products, Italy",
        location: area.EUROPE,
        category: category.MILKBRAND,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/uY9fC5.jpg"
    }, {
        title: "AVONMORE milk products, Ireland",
        location: area.EUROPE,
        category: category.MILKBRAND,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/oWnwat.jpg"
    }, {
        title: "Mlekovita milk products, Poland",
        location: area.EUROPE,
        category: category.MILKBRAND,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/MKSgQa.jpg"
    },
    {
        title: "Mleczna Dolina milk products, Poland",
        location: area.EUROPE,
        category: category.MILKBRAND,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/onl308.jpg"
    }, {
        title: "Lactel Dairy milk products, France",
        location: area.EUROPE,
        category: category.MILKBRAND,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/VcF9tF.jpg"
    }, {
        title: "Valio milk products, Finland",
        location: area.EUROPE,
        category: category.MILKBRAND,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/MaNRmK.jpg"
    }, {
        title: "Arla milk products, Danish",
        location: area.EUROPE,
        category: category.MILKBRAND,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/BkKaSo.jpg"
    }, {
        title: "ДОМИК В ДЕРЕВНЕ milk products, Russia",
        location: area.EUROPE,
        category: category.MILKBRAND,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/1cSJhi.jpg"
    }, {
        title: "ПРОСТОКВАШИНО milk products, Ukraine",
        location: area.EUROPE,
        category: category.MILKBRAND,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/OSSqfO.jpg"
    }, {
        title: "Rachel's milk products, Britain",
        location: area.EUROPE,
        category: category.MILKBRAND,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/Uv3l5s.jpg"
    }, {
        title: "Yili milk products, China",
        location: area.ASIA,
        category: category.MILKBRAND,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/VWscWO.jpg"
    }, {
        title: "Mengniu milk products, China",
        location: area.ASIA,
        category: category.MILKBRAND,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/lCcGqc.jpg"
    }, {
        title: "Amul milk products, India",
        location: area.ASIA,
        category: category.MILKBRAND,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/JSLzd9.jpg"
    }, {
        title: "Meiji milk products, Japan",
        location: area.ASIA,
        category: category.MILKBRAND,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/CBHlP1.jpg"
    }, {
        title: "Furuya milk products, Japan",
        location: area.ASIA,
        category: category.MILKBRAND,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/S52te1.jpg"
    }, {
        title: "Yakult milk products, Japan",
        location: area.ASIA,
        category: category.MILKBRAND,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/bs1rjm.jpg"
    }, {
        title: "KOIWAI milk products, Japan",
        location: area.ASIA,
        category: category.MILKBRAND,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/KrnFaw.jpg"
    }, {
        title: "YONSEI MILK products, Korea",
        location: area.ASIA,
        category: category.MILKBRAND,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/3EJnKi.jpg"
    }, {
        title: "Seoulmilk products, Korea",
        location: area.ASIA,
        category: category.MILKBRAND,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/qu1iEN.jpg"
    },
    {
        title: "Organic Valley products, America",
        location: area.NORTH_AMERICA,
        category: category.MILKBRAND,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/vVdBWs.jpg"
    }, {
        title: "Herizon products, America",
        location: area.NORTH_AMERICA,
        category: category.MILKBRAND,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/9FlINw.jpg"
    }, {
        title: "Natrel products, Canada",
        location: area.NORTH_AMERICA,
        category: category.MILKBRAND,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/XrRL8l.jpg"
    },
    {
        title: "Beatrice products, Canada",
        location: area.NORTH_AMERICA,
        category: category.MILKBRAND,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/b80FA7.jpg"
    }, {
        title: "SanCor products, Argentina",
        location: area.SOUTH_AMERICA,
        category: category.MILKBRAND,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/pvdu6k.jpg"
    },
    {
        title: "Tregar products, Argentina",
        location: area.SOUTH_AMERICA,
        category: category.MILKBRAND,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/71TYak.jpg"
    },
    {
        title: "LA SIBILA products, Argentina",
        location: area.SOUTH_AMERICA,
        category: category.MILKBRAND,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/Sfs1JF.jpg"
    },
    {
        title: "Conaprole products, Uruguay",
        location: area.SOUTH_AMERICA,
        category: category.MILKBRAND,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/G0Vblm.jpg"
    }, {
        title: "Itambé products, Brazil",
        location: area.SOUTH_AMERICA,
        category: category.MILKBRAND,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/is7zxH.jpg"
    }, {
        title: "Clover products, South Africa",
        location: area.AFRICA,
        category: category.MILKBRAND,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/5pYLUM.jpg"
    }, {
        title: "Checkers products, South Africa",
        location: area.AFRICA,
        category: category.MILKBRAND,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/71dW5I.jpg"
    }, {
        title: "Spar products, South Africa",
        location: area.AFRICA,
        category: category.MILKBRAND,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/71dW5I.jpg"
    },
    {
        title: "Norco products, Australia",
        location: area.AFRICA,
        category: category.MILKBRAND,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/3snBpi.jpg"
    },
    {
        title: "Norco products, Australia",
        location: area.OCEANIA,
        category: category.MILKBRAND,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/3snBpi.jpg"
    },
    {
        title: "Dairy Farmers products, Australia",
        location: area.OCEANIA,
        category: category.MILKBRAND,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/WQm7Eu.jpg"
    },
    {
        title: "Pura products, Australia",
        location: area.OCEANIA,
        category: category.MILKBRAND,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/rlQT12.jpg"
    }, {
        title: "Riverina products, Australia",
        location: area.OCEANIA,
        category: category.MILKBRAND,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/pWuf9L.jpg"
    }, {
        title: "Anchor milk products, New Zealand",
        location: area.OCEANIA,
        category: category.MILKBRAND,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/pWuf9L.jpg"
    }, {
        title: "NZMP milk products, New Zealand",
        location: area.OCEANIA,
        category: category.MILKBRAND,
        url: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/zK8671.jpg"
    },
]

export const TechnologyInformationArray: TechnologyInfo[] = [
    {
        title: "Conventional technology",
        image: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/3027EE.jpg",
        content: "In the rotary milking plant, more than 60 cows are guided by an automatic guidance system to the milking rotary in an orderly manner, where the operator sets up the suckers and the automatic milking system begins to operate. The milk is then transported by milk truck to the production plant. During transport, every drop of milk is visually tracked by GPS, and is scanned by barcode and randomly numbered upon arrival at the plant."
    },
    {
        title: "INF immersion sterilisation technology",
        image: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/p3uiCb.jpg",
        content: "INF immersion sterilisation technology is also known as 'steam immersion sterilisation technology', which, as the name suggests, is a huge vacuum steam space where the milk passes through in a natural drip pattern at a uniform rate to achieve a rise in temperature. The milk is then sterilised by passing high pressure through the sterilisation temperature pipeline, where the steam is rapidly exchanged with the milk to complete the sterilisation process, and then cooled rapidly to evaporate excess water, as if the milk had been given a 'steam bath'. With this technology, the milk is deeply sterilised while retaining more active protein and tasting great."
    },
    {
        title: "Litelead membrane separation technology",
        image: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/ywNs6O.jpg",
        content: "Lactalyst membrane separation technology whey protein concentration separation membrane process, mainly used for a-la and β-lactin molecular weight differences for purification and separation. Milk protein concentration separation membrane process ion exchange technology, purification concentration desalination technology and membrane separation equipment is mainly used to elute and separate and purify the two proteins by using the difference in the degree of charge and resin binding."
    },
    {
        title: "Extended shelf life production process",
        image: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/4neHjJ.jpg",
        content: "ESL milk is really improved sterilization process and improve the filling equipment hygiene level based on the production of between ordinary bus pasteurized milk and ultra-high temperature sterilized milk, shelf life of 7 ~ 10d, 30d, 40d, or even longer, but ESL milk is still essentially pasteurized milk, the main measure is to use a higher sterilization temperature than pasteurization (i.e. ultra-pasteurization), the typical ultra-pasteurization conditions are ESL milk production methods include the plate heat exchanger method and a combination of concentration and pasteurisation. The difference between ESL milk and pasteurised milk and UHT milk is, to put it simply, the ability to maintain the flavourful and nutritious characteristics of the milk while improving shelf life."
    },
    {
        title: "Skim milk concentration and desalination technology",
        image: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/m0FoAz.jpg",
        content: "After the fresh milk has been sterilised by bus, it is centrifuged for skimming. After the skimmed milk has been cooled down, it enters the nanofiltration system for concentrated desalination, during which pure water is continuously added to wash out the inorganic salts from the skimmed milk. The wastewater is treated by the reverse osmosis system to obtain pure water, which is then used in the nanofiltration process unit for water addition and elution."
    },
    {
        title: "Pasteurisation",
        content: "Sterilisation is carried out by rapidly heating the milk to a temperature of at least 135°C, holding it for a few seconds and then rapidly cooling it to ambient temperature. This treatment kills all microorganisms present in the raw milk. When packaged in aseptic containers, UHT milk can be stored for several months and does not require refrigeration until the package is opened. The shelf life of UHT milk is not limited by microbial growth, but by physical, chemical and enzymatic changes in the milk, such as browning reactions, cream separation, precipitation or gel formation. Consumers often use the term 'fresh milk' to describe milk distributed under refrigerated conditions. ",
        image: "https://mikes.oss-cn-beijing.aliyuncs.com/uPic/idVrZP.jpg"
    }
]
export const data: Data[] = [
    {
        name: "Germany",
        location: [54.55, 10.21],
        content: `<h6>Angeln cattle</h6><hr/><b> Milk Production:</b>Adult cattle weigh 1000-1300 kg and cows 650-800 kg. German yellow cattle belong  to meat and milk cattle, and its production performance is slightly lower than       Simmental cattle. The birth weight is 40.8kg, the weaning weight is 213kg, and the average daily gain is 985g. When the carcass weighs 336 kg, the eye muscle area is 91.8 square centimeters. The slaughter rate was 63%, and the net meat rate was 56%. During lactation, the milk yield was 4650 kg and the milk fat rate was 4.15%. Castrated calves are fattened to 18 months old, with a weight of 600 ~ 700 kg and a fast weight gain rate. The rate of dystocia is low.<br/><b>History:</b> It is famous for its high fat content in milk. German yellow cattle is a breed closely related to Simmental cattle.Its body shape   and appearance are similar to Simmental cattle, except that its hair color is brown, from yellow brown to red brown, and the hair color of eye circles is light.Long body, large physique, deep chest, straight back, short and powerful limbs and strong muscles.Cows have large breasts and strong attachments.<hr/><h5>Brands</h5><br/>${MilkBrand("Oldenburger Dairy Brands", "https://www.oldenburger-dairy.com/ ", "Germany")}<br/>${MilkBrand("Töpfer Dairy Brands", "https://www.toepfer-babywelt.de/en/ ", "Germany")}<br/>${MilkBrand("sternenfair Dairy Brands", "https://www.sternenfair.de/ ", "Germany")}<br/>${MilkBrand("Hochwald Dairy Brands", "https://www.hochwald.de/de/", " Germany&Netherlands")}`
    },
    {
        name: "Swiss",
        location: [47.04, 7.411],
        content: `${CowBrand("Swiss brown cattle", "The average milk protein is more than 3.5%. If it is used to make cheese and other dairy products, the product will have a higher yield. The average yield of excellent cattle in 305 days is more than 5300 kg. The annual milk yield of Swiss brown cattle is 2500 ~ 3800 kg, and the milk fat rate is 3.2% ~ 3.9%; The slaughter age is 485 kg, and the live weight can reach 50% at 18 months. Swiss brown cattle were bred into a dairy variety in the United States in 1906. In 1999, the average milk yield of Swiss brown cattle in the United States reached 9521 kg (adult equivalent) in 305 days.", "Swiss brown cow's milk is a famous raw material in cheese production.Strong physique and medium horn length.The hair color of the whole body is brown, ranging from light brown, grayish brown to dark brown.The nose is black, and there is a light color or white band around the nose.The horn tip, tail tip and hoof are black.The weight of adult male and female cattle is 1000 kg and 500 ~550 kg respectively.")}`
    },
    {
        name: "Russia",
        location: [57.9, 41],
        content: `${CowBrand("Kostroma Cow Breed", "10000 kg per year,The service life is up to 25 years.", "Kostroma cow is a Russian breed, which was bred in the middle of the 20th century. These cows are considered similar to cows in appearance, but they have a longer head and a narrower body. The milk of these cows is considered to be very healthy and contains many nutrients that promote human growth, which is why this cow's milk is used and consumed all over the world.")}<hr/>${MilkBrand("ДОМИК В ДЕРЕВНЕ Dairy Brands", "https://domik-v-derevne.com/", "Russia")}`
    },
    {
        name: "Ukraine",
        location: [51.49, 31.13],
        content: `${MilkBrand("ПРОСТОКВАШИНО Dairy Brands", "https://danone.ua/", " Ukraine")}`
    },
    {
        name: "Poland",
        location: [52.5, 21.12],
        content: `${CowBrand("Polish Red Bull", "Cows weigh an average of 500 kg and stand about 128 cm when withering; The average weight of the bull is 770 kg and the height is 139 cm. Dairy cows produce about 4000 kilograms of milk every year, with a fat content of about 4-4.5%.", "Polska Czerwona-Polish Red. The Polish Red breed is descended from the prehistoric line of short-horned cattle (Bos taurus brachyceros). The origins of Polish Red cattle are in the second half of the 19th century, when herds of this breed were established in Polish lands, especially in the south. In the interwar period, the Polish Red breed accounted for 25% of the national cattle population. In the 1960s, there were still about 2 million cattle of this breed, which accounted for 18% of the population. This was followed by a rapid decrease in the population of Polish Red cattle, due to the emergence of more productive breeds and the use of improvement crossing with imported red cattle (mainly Angler). Nowadays, the trend of the population is upwards.")}<br/>${MilkBrand("Mlekovita Dairy Brands", "https://mlekovita.com.pl/pl/", "Poland")}<br/>${MilkBrand("Mleczna Dolina Dairy Brands", " https://www.biedronka.pl/pl/mleczna-dolina", "Poland")}`
    },
    {
        name: "Britain",
        location: [51.36, -0.05],
        content: `${CowBrand("Shorthorn Cow Breed", "    Shorthorn milk has the most favorable protein-fat ratio of the dairy breeds which is an added plus when marketing your milk for cheese.This cow 's milk content: fat, 1.3g/100g;  protein, 3.4g/100g; ", "Shorthorns can be successfully crossed with any other dairy breed to quickly incorporate the Dairy Shorthorn-related grazing traits. Although no bulls can be completely trusted, Dairy Shorthorns tend to be quieter than other dairy bulls and fit well where a bull is used to get cows settled.")}<hr/>${MilkBrand("Yeo Valley Dairy Brands", "https://www.visit-exmoor.co.uk/ ", "    Britain")}${MilkBrand("Rachel's Dairy Brands", "www.rachelsorganic.co.uk ", "Britain")}${MilkBrand("Delamere Dairy Dairy Brands", "https://www.delameredairy.co.uk/", "Britain")}`
    },
    {
        name: "Netherlands",
        location: [4.54, 52.23],
        content: `${CowBrand("Holstein", "    It is one of the major dairy breeds, producing an average of 22,530 British pounds (10,220 kg) of milk per year Of all the dairy breeds available today, Holstein is the most influential worldwide dairy breed, with the widest distribution and largest stock in all regions of the world. Known for its large size, high milk production and wide adaptability, it is recognised as the world's highest milk-producing breed and dominates dairy production in most countries around the world.This cow 's milk content: fat, 0g/100g;  protein, 3.5g/100g; ", "This is a milk-producing breed of domestic cattle. It has a black and white mottled pattern distributed over its body, as well as a red and white mottled pattern, and shares features with the 4,500-year-old wall paintings of the Saqqara necropolis complex in Egypt.")}`
    },
    {
        name: "France",
        location: [48.52, 2.25],
        content: `${MilkBrand("DANA Dairy Brands", "http://www.danadairy.com/dana-evaporated-milk/?gclid=EAIaIQobChMI3rmi-dbF9gIVBLGGCh3QMg76EAAYASAAEgJcjfD_BwE", "Europe, New Zealand")}<br/>${MilkBrand("Les Fayes Dairy Brands", " https://en.laiterielesfayes.com/ ", " France")}<br/>${MilkBrand("Lactel Dairy Brands", " https://www.lactalis-international.com/en/", "Europe, America, India, the Middle East, Australia")}`
    },
    {
        name: "Finland",
        location: [60.1, 24.57],
        content: `${MilkBrand("Maitokolmio Dairy Brands", "https://www.maitokolmio.fi/en/", "Finland")}<br/>${MilkBrand("Valio Dairy Brands", "https://www.valio.com/ ", "Finland")}`
    },
    {
        name: "Danish",
        location: [55.43, 12.34],
        content: `${MilkBrand("The Danish Dairy Brands", "https://www.arla.com/", "Denmark, Sweden, England, Germany")}`
    }, {
        name: "Spain",
        location: [40.23, -3.43],
        content: `${MilkBrand("LARSA Dairy Brands", "https://leitelarsa.es/", "Spain")}`
    },
    {
        name: "Portugal",
        location: [38.43, -9.09],
        content: `${MilkBrand("Mimosa Dairy Brands", "https://www.lactogal.pt/homepagemarcas.aspx?menuid=46 ", "Spain&Portugal")}`
    },
    {
        name: "China",
        location: [39.55, 116.20],
        content: `${CowBrand("Xinjiang brown cattle Cow Breed", "The concentrated high-calcium milk is enriched with milk mineral salts and vitamin D to increase the nutritional content, and the taste of the milk is enhanced by adding praying agents.", "Xinjiang Brown cattle are dairy and meat type, with medium to large body size. They are raised in the grasslands of Yili and Tacheng grazing areas throughout the year, and their milk production is affected by the water and grass conditions in the natural pastures.")}<br/>${CowBrand("Chinese Holstein Cow Breed", "Chinese Holstein cows (Chinese black and white flower cows) have high milk production, but low milk fat rate and are not tolerant of roughage, with good feed conditions and feeding management, the average 305-day milk production can reach 6,500 to 7,500 kg, with a milk fat rate of about 3.5%.<br/>The milk is rich in aroma and rich in protein and calcium, which can meet the nutritional requirements of human body.", "Chinese Holstein cows are robust and well-proportioned in structure. The coat color is black and white, with distinctive flower pieces. The hair color is generally black and white, with distinct flower layers, and the forehead has more white shifts; the bottom of the abdomen, below the knee joints of the limbs and the tail end are mostly white, the body is meticulous and sturdy, the body structure is well-proportioned, the lactation system is well developed, and the hooves are solid.")}<h5>Brands</h5>${MilkBrand("Yili Dairy Brands", "https://www.yili.com/cms/index ", "China")}${MilkBrand("Mengniu Dairy Brands", "https://www.mengniu.com.cn/", "China")}${MilkBrand("Xiandaimuye Dairy Brands", "http://www.xiandaimuye.com/", "China")}${MilkBrand("Wondersun Dairy Brands", "http://www.wondersun.com.cn/ ", "China")}${MilkBrand("Europe-Asia Dairy Brands", "http://www.dy-ry.com/ ", "China")}${MilkBrand("Bonus Dairy Brands", "http://www.bqsnn.com/", "China")}`
    },
    {
        name: "Mongolia",
        location: [51.6, 119.9],
        content: `${CowBrand("Mongolian goat's milk", " Goat's milk or fresh goat's milk is sweet in taste and warm in nature, entering the liver, stomach, heart and kidney meridians, and has the good effect of warming and nourishing the deficient blood. Goat milk contains protein, fat, carbohydrates, vitamin A, vitamin B, calcium, potassium, iron and other nutrients. Modern nutritional research has found that goat's milk contains slightly more protein and minerals, especially calcium and phosphorus, than cow's milk; it also contains more vitamins A and B than cow's milk, which is good for protecting eyesight and restoring physical energy. Compared to cow's milk, goat's milk is easier to digest, with a digestibility rate of over 94% for babies.", "Sheep's milk and milk products are mild and warm in nature, which can benefit the vital energy and nourish the blood, tonify the kidneys and stomach, and laxify the bowels. If consumed properly, milk can be used to nourish, strengthen the body and prevent disease.")}${CowBrand('Horse milk', "Horse milk is sweet and cool in nature, and contains protein, fat, sugar, phosphorus, calcium, potassium, sodium, vitamin A, vitamin B1 to B2, vitamin C, nicotinic acid, inositol and many other ingredients. It is a tonic for the weak, moistens the skin and quenches thirst. Horse milk is sweet and cool in nature, good at clearing heat from the gall bladder and stomach, and can cure diseases of the throat and mouth.", "Horse milk is the most nutritious of all, and the milk of horses is used to make zigzag (horse milk wine), which has been used to treat gastrointestinal and cardiopulmonary diseases, so Mongolian herdsmen have valued and enjoyed horse milk since ancient times. The milking of the horses is a very labour-intensive task, as the horses are distant-feeding animals that move within a radius of several dozen to several hundred miles, and the milking of the horses is carried out three to four times from morning to evening. This makes the festival not only grand but also a mass gathering.\nIn comparison, horse milk is a clear tonic, goat milk is a warm tonic and cow milk is a flat tonic. From a nutritional point of view, horse milk is less nutritious than goat's milk and cow's milk in terms of protein and fat.")}`
    },
    {
        name: "India",
        location: [22.32, 88.22],
        content: `<h5>Brands</h5>${MilkBrand("Amul Dairy Brands", " https://amul.com/index.php ", "India")}`
    },
    {
        name: "Japan",
        location: [35.41, 139.44],
        content: `${CowBrand("Holstein Cow Breed", "Holstein is a typical dairy cow, and 99% of dairy cows in Japan are Holsteins. They are originally from the Netherlands and Holstein region of Germany. They are big built and have large udder with high production yield of milk. They are the most common dairy cows in the world. They have mild temper and good tolerance with cold weather but not good with heat. They are not only black and white in colour but also brown and white. ", "After purification, the median of milk production for each cow is 26.2kg, milk fat is 3.8%, milk protein is 0.6916mg/ml, lactoperoxidase is 0.2729mg/ml, and lactoperoxidase activity is 0.7589 U/ml.")}${CowBrand("Jersey Cow Breed", "Jersey is the second popular breed in Japan after Holstein and originally from Jersey island in the English Channel. They are rather small and soft brown in colour. Their production yield is not as good as Holsteins', but milk fat content is higher.", "After purification, the median of milk protein for each cow is 0.9647mg/ml, milk fat is 5.3%, lactose is 4.53%, minerals is 0.6%, water is 85.48%, lactoperoxidase is 0.3807mg/ml, and lactoperoxidase activity is 0.8705 U/ml.")}${CowBrand("Brown Swiss Cow Breed", "Brown Swiss is the third popular breed in Japan and native to Switzerland. They are famouse Alpine breed with very rich milk which is suitable for natural cheese. They are large in dark brown to silvery brown colour and mild in temper.", "The average milk fat is 4.36%, milk protein is 3.38%, milk production per cow is 6082kg, MFSF is 9.51%, and somatic cells are 108 for 10,000 units/ml.")}<h5>Brands</h5>${MilkBrand("meiji Dairy Brands", " https://www.meiji.co.jp/ ", "Japan")}${MilkBrand("Furuya Dairy Brands", "https://furuya-milk.co.jp/", "Japan")}${MilkBrand("Yakult Dairy Brands", " https://www.yakult.co.jp/", "Japan")}${MilkBrand("KOIWAI FARM Brands", " https://www.koiwai.co.jp/corporate/business/milk.html ", "Japan")}`
    },
    {
        name: "Korea",
        location: [37.35, 127.03],
        content: `${CowBrand("Holstein Cow Breed", "Holstein has been the most widely used dairy breed in Korea since its introduction there in 1885. Since the initiation of the official dairy herd improvement program in 1979, Holsteins have been intensively selected for Korean environments. Korea's modern dairy industry began in 1902 with 20 Holstein cows and its first modern milk processing facility being built in 1937. It is a new dairy powerhouse with 5,300 dairy farms and over 404,000 cows.\nSouth Korea's natural resource conditions are narrow territory, more mountains and less land, two-thirds of which are mountains and hills. A large amount of forage required for dairy farming needs to be imported, which increases the production price of raw milk. However, relying on the advanced pasture management level, scientific and technological level, professional equipment, appropriate breeding technology, reasonable proportion of concentrate and roughage and other advantageous conditions, the milk output increases year by year. By 2020, the milk protein rate of its raw milk will be 3.3%, slightly higher than that of China, Japan and the United States, but lower than that of Israel, New Zealand, Argentina and the United Kingdom; The milk fat rate of raw milk was 4.03%, slightly higher than that of Japan, China, Argentina and Israel. On the whole, the quality of raw milk in Korea is relatively good, and liquid milk accounts for the highest proportion in its dairy product structure, up to 97.55%.", "For 3DIM, the average milk fat is 4.67, milk protien is 7.47, lactose is 4.24, total solids are 19.92, SCC is 2034×103/ml, citrate is 6.08 mmol/L, MUN is 22.31mg/dL, and FFA is 5.01mmol/100g. For 30DIM, the average milk fat is 4.12, milk protien is 2.82, lactose is 4.89, total solids are 12.55, SCC is 55.67×103/ml, citrate is 2.79 mmol/L, MUN is 7.77mg/dL, and FFA is 1.11mmol/100g. ")}<h5>Brands</h5>${MilkBrand("YONSEI MILK  Brands", " https://home.yonseidairy.com/ENG/ ", "Korea")}${MilkBrand("Seoulmilk  Brands", "https://www.seoulmilk.co.kr/enterprise/main.sm", "Korea")}${MilkBrand("Maeil Brands", "https://www.maeil.c", "Korea")}`
    },
    {
        name: "Philippines",
        location: [15, 120],
        content: `<h5>Brands</h5>${MilkBrand("Alaska Milk Dairy Brands", " https://www.alaskamilk.com/", "Philippines")}`
    },
    {
        name: "Vietnam",
        location: [21.18, 105],
        content: `<h5>Brands</h5>${MilkBrand("Vinamilk Dairy Brands", "https://www.vinamilk.com.vn/ ", "Vietnam")}`
    },
    {
        name: "Malaysia",
        location: [3, 100],
        content: `<h5>Brands</h5>${MilkBrand("Dutch Lady Dairy Brands", " https://www.dutchlady.com.my/ ", "Malaysia")}${MilkBrand("Farm Fresh Dairy Brands", "https://www.farmfresh.com.my/", " Malaysia&Australia")}`
    },
    {
        name: "Indonesia",
        location: [-6.12, 160.5],
        content: `${CowBrand("Chinese Holstein cattle Cow Breed", " The average milk fat is 3.81%, milk protein is 3.10%, milk production per cow is 5000kg. For 100 milliliters of milk, it contains 67 kcal, 3.20 g protein, 3.80 g fat, 5.00 g carbohydrates, and 52 mg sodium.", "Chinese Holstein cattle: In order to meet the demand of domestic milk consumption, Indonesia imported black and white cattle breeding cattle from the Netherlands, which is called Chinese Holstein cattle. Holstein cows have high requirements for feed because of their good performance and high milk yield, especially the quality of feed has a significant impact on milk performance. The optimum temperature for the cattle is 0-24℃. Milk yield will be affected if the temperature exceeds 30℃. The average annual milk yield of cows is 5 000 kg, with a fat content of 3%-3.5% and a fat content of 200 kg.")}${MilkBrand("Indolakto  Dairy Brands", "http://en.indolakto.web.indotrading.com/ ", " Indonesia")}${MilkBrand("Ultrajaya Milk Dairy Brands", "https://www.ultrajaya.co.id/", "Indonesia")}`
    },
    {
        name: "Kazakhstan",
        location: [43.15, 76.57],
        content: `${CowBrand("Red steppe& Alatau cattle Cow Breed", "① Red steppe: Milk yield 1400 ~ 2000kg, high yield cows milk yield 3600kg; The average milk fat percentage was 4.13%, milk protein percentage was 4.3%, lactose percentage was 4.0%.\n② Alatau: The average annual milk yield can reach 3000 to 3500 kg, and the milk fat percentage is mostly 3.8 to 4.2%.", "ppe is a short-horn bull used for both milk and meat and bred with Mongolian cows for a long time. It has the characteristics of strong adaptability and coarse feeding tolerance. Steppe red cattle had good milk producing performance, with average lactation days of each parities ranging from 210 to 220 days.\n② Alatau: Alatau cattle are native to the Soviet Union. Milk-meat type appearance, brown color, strong and wiry. Rough feeding tolerance, cold resistance, strong adaptability, good disease resistance, but the production performance is not very stable. Adult bulls weigh 800 to 900 kg, and cows 550 to 700 kg. ")}`
    },
    {
        name: "Pakistan",
        location: [33.4, 73.08],
        content: `${CowBrand("Nili-ravi buffalo cattle Cow Breed", "The average milk fat is 6.35%. For 100 milliliters of milk, it contains 303kJ, 3.80 g protein, 3.50 g fat, 6.40 g carbohydrates, and 62 mg sodium and 130 mg calcium", "Nili-ravi buffalo breeding stock: Buffalo milk is the main source of milk in Pakistan, accounting for 64.7% of the country. Nilafee buffalo is produced in Pakistan. The average lactation yield is 1971.18±950kg (283.91±79.18 days) and the highest daily yield is 19.65kg. The 305 days yield of good cows is 3396.4kg. The weight of adult male cows was 821.1±98kg and 659.85±96kg, respectively. The meat is delicious and the milk fat percentage is 6.35%.")}<h5>Brands</h5>${MilkBrand("Olper's  Dairy Brands", " https://olpersmart.pk/ ", "Pakistan")}`
    },
    {
        name: "America",
        location: [33.58, -117.47],
        content: `${CowBrand("Jersey Cattle Cow Breed", "The average annual milk yield is 3500 litres. The average milk fat yield is 5.5-6%. The milk fat is yellow and has good flavor. Jersey cattle mature early, generally 15-16 months of age began to breed, more heat resistant.\n For 100g milk, it contains 335 kJ, 5.00g lactose, 5.00g fat, 3.80g protein, 60mg sodium and 120mg calcium.", "Jersey cattle are originated from Jersey Island in The UK. Jersey Island is an island at the southern end of the English Channel between The UK and France, covering an area of about 120km2. It has a mild climate and abundant aquatic grass, which is suitable for cattle, sheep and other livestock grazing. There are different opinions about the origin of the breed of Jersey cattle, one is that the original source of Jersey cattle is western European bison, another is that Jersey cattle originated from the original breed of cattle in Africa, which is the reason why this breed has better heat resistance. Although the exact origin of the breed is not available, the breeding history of the Jersey breed is clearly traceable. Jersey cattle was probably raised in the 17th century, after long-term inbreeding and breeding in the 18th century, and began to take shape of breed characteristics, the establishment of the British Jersey cattle breed Association in 1844 marked the formal formation of the Jersey cattle breed.")}${CowBrand("Red and White Holstein Cow Breed", "Red and white dairy cows have high production performance, which is also one of the main reasons why Europeans are willing to choose. This cow 's milk content: fat, 3.65g/100g;  protein, 3.06g/100g;  F:P, 1.19.", "Before this century, red and white dairy cows occasionally appeared in the black and white dairy herd and have been regarded as unwelcome abnormal individuals. At that time, the World Association stipulated that only black-and-white dairy cows were allowed to register, and the red and white dairy cows born were not allowed to register regardless of their performance. Most black-and-white cattle farmers don't want red and white cows in their cattle farm, so they will be eliminated quietly when they appear. Because they are worried that red and white cows will lead buyers to doubt the purity of their herd blood, which will affect sales and income. However, some people have a more tolerant attitude towards red and white dairy cows, while others have a special interest in red and white dairy cows and strive to expand its influence and open up markets for them. Larry Moore of the United States is one of the most famous. He was originally a famous mink breeder. He used the knowledge of recessive red gene in mink breeding to cultivate minks with different characteristics and various fur colors. For the same purpose, with the assistance of some dairy breeders, he established the first red and white flower dairy farm in the United States. The size and milk yield of the red and white dairy cows are very ideal, which has attracted widespread attention.")}<h5>Brands</h5>${MilkBrand("Straus Dairy Brands", "https://www.strausfamilycreamery.com/ ", "America")}${MilkBrand("Organic Valley Dairy Brands", "https://www.organicvalley.coop/ ", "America")}${MilkBrand("Herizon Dairy Brands", " https://horizon.com/ ", "America")}`
    },
    {
        name: "Canada",
        location: [53.01, -71.15],
        content: `${CowBrand("Holstein Cow Breed", "    Canadian Holstein cattle are the best dairy breed in the world, with milk yield of 35461kg per year, milk fat ratio of 3.66%, milk protein ratio of 3.33%.\n For 100g milk, it contains 298 kJ, 4.80g lactose, 4.00g fat, 3.20g protein, 62mg sodium and 110mg calcium.", "Holstein cattle are native to The provinces of North Holland and West Friesland in the North of the Netherlands, and their descendants are distributed throughout the Netherlands and even northern France and Holstein province in Germany. After the introduction of holstein cattle to the United States, two cow associations were initially established, namely HolsteinBreeders Association and the Dutch Friesian Herd Book Association. In 1885, the two societies merged to form the Holstein-Friesian Association of America, hence the Name Holstein-Friesian cattle. In the Netherlands and other European countries it is called a Friesian cow. Because of its black and white patches, it is also called Black and White Dairy Cattle.")}<h5>Brands</h5>${MilkBrand("Natrel Dairy Brands", "https://www.natrel.ca/en ", "Canada")}${MilkBrand("Beatrice Dairy Brands", "https://beatrice.ca/en/ontario/ ", "Canada")}${MilkBrand("Neilson Dairy Brands", "https://www.neilsondairy.com/", "Canada")}`
    },
    {
        name: "Mexico",
        location: [19.22, -99.15],
        content: `${CowBrand("Corriente Cow Breed", "For 100g milk, it contains 320 kJ, 4.60g lactose, 4.10g fat, 2.90g protein, 58mg sodium and 100mg calcium.", "The Corriente can be traced back to the first cattle brought to the new world by the Spanish as early as 1493. These cattle were hardy breeds chosen especially to withstand the ocean crossing and adapt to their new land. They were brought to the West Indies and south Florida, as well as Central and South America. Over the centuries the descendants of these cattle were bred for different purposes - milk, meat and draft animals.\nIn the early 1800's, European and other breeds were introduced to the new world, and by the 1900's many ranchers in the Americas were upgrading their herds with modern beef cattle. From this introduction of many new breeds, pure descendants of the original Spanish cattle almost disappeared, but some survived with little human care or intervention in remote areas of Central and South America, and in very limited numbers in some areas of the southern U.S.\nToday there is evidence of a worldwide growing interest in preserving various strains of these hardy, native cattle.\nJohn E. Rouse, in his book, World Cattle, Vol. III, Cattle of North America, explains the names used in Mexico. 'Descendants of the original Spanish cattle, little influenced by modern breeds, are now seen only in the remote parts of the country. These are generally known as Criollo cattle, although in the state of Sonora the term Corriente is more common, and in Baja California the word Chinampo is used. All these terms, meaning 'common cattle' or 'cattle of the country' are applied to more or less pure descendants of the Spanish cattle, as well as to the indiscriminate mixtures of these and more recently introduced breeds.'\nIn Florida, the few remaining small, native cattle - cousins of the Mexican Corriente are called Scrub cattle or Cracker cattle, and similar cattle in Louisiana are called Swamp cattle.")}<h5>Brands</h5>${MilkBrand("Santa Clara Dairy Brands", "http://fasantaclara.com.ar/en/ ", "Mexico")}`
    },
    {
        name: "Argentina",
        location: [-34.2, -58.30],
        content: `${CowBrand("Argentine Criollo Cow Breed", "The average milk fat for each cow is 2.81% (22.3kg), milk protein is 3.88% (31.6kg), lactose is 4.71% (39.5kg), and non fat solids (SNG) is 9.29% (76.9kg).", "The Argentine Criollo is one of the Criollo type cattle found in the Americas and include the Texas Longhorn amoung others. The origin of Criollo cattle goes back to the first bovines brought by Columbus in his travels to America in 1493. These cattle were selected in Andalusia and they spread in the New World with the colonization expeditions. Because of this, they quickly spread throughout the Americans adapting to the diverse climatic conditions. From this original seedstock they have adapted and multiples and now comprise breeds found from the patagonian glaciers to the North American west.\nThe Argentine Criolla cow is medium size (400-440 kg), of angular conformation, with a high tailhead indicating easier calving. The daily milk production is good (4-6 daily liters). Mature weights of the bulls varies from 600 to 800 kg.\nThe breed is docile and easily worked with horses. They exhibit all the possible color patterns of the Bos taurus, on the white basic layers, doradillas and blacks, with all their well-known combinations. Their fertility and ease of calving make them a good breed for less intensive systems. Its genetic variability is another one of the advantages to be considered when they are used in a crossbreeding program because it assures a greater hybrid vigor.\nThe maternal ability of the femailes are reflected in the high weaning weights of the calves, up to 50% of the cows own body weight. The good milk production of the cows also offers a possibility for the dual-operation in zones at where the traditional milk races cannot survive. Their hardiness and longevity are some of the advantages that the Criollo breed passes on to its offspring.")}<h5>Brands</h5>${MilkBrand("SanCor Dairy Brand", "http://www.sancor.com/", "Argentina")}${MilkBrand("Tregar Dairy Brand", "https://tregar.com.ar/", "Argentina")}${MilkBrand("LA SIBILA Dairy Brand", "https://www.lasibila.com.ar/", "Argentina")}`
    },
    {
        name: "Uruguay",
        location: [-34.53, -56.11],
        content: `${CowBrand("Uruguayan Holstein (UH)/UH x New Zealand Holstein Friesian (UH-NZHF) Cow Breed", "After third lactation: For UH-NZHF, its daily milk production is 25.5 L/cow/d, milk fat is 3.89%, milk protein is 3.3%, and lactose is 5.06%; For UH, its daily milk production is 26.5 L/cow/d, milk fat is 3.39%, milk protein is 3.18%, and lactose is 4.85%.", "Uruguay, a country of 3.5 million people, produces enough milk to supply about 20 million people and is a major milk exporter. Uruguayan dairy production systems are characterised by grazing herds, with 70% of the diet being grazed pasture, hay and silage and the remainder grain-based concentrates. Milk payment is based on milksolids production, with a deduction for milk volume. The genetic origin of Uruguayan dairy herds is mostly from the confined production systems of North America and Canada where total mixed rations are fed. In contrast, the Uruguayan system is based on grazed pasture, similar to that of New Zealand. However, most Uruguayan soils have a poorer fertility with a lower phosphorus content than New Zealand soils. Consequently the lifespan of improved pastures is shorter and thus, dry matter utilization is lower. ")}<h5>Brands</h5>${MilkBrand("Conaprole Dairy Brands", "https://www.conaprole.uy", "Uruguay")}`
    },
    {
        name: "Brazil",
        location: [-15.45, -47.57],
        content: `${CowBrand("Girolando cow breed", "For per 100g milk, the milk fat is 3.274g, lactose is 4.46g, total solids is 11.808g, total protein is 3.066g, true protein is 2.853g, casein is 2.065g, and the value of casein: true protein is 0.82.", "The Girolando is a breed of dairy cattle created in Brazil by crossing Gyr cattle, a Bos indicus breed which is resistant to hot temperatures and tropical diseases, with Holstein cows, a Bos taurus breed. Coat colors vary from black to black-and-white. Approximately 80% of the milk production in Brazil is produced from Girolando cows. A Girolando is 3/8 Gir and 5/8 Holstein.The origins of the first Girolando date from the 1940's, compared to other breeds it is a relatively young breed. Around the 1940's Brazilian farmers began to cross the Gir intensively with the Dutch, looking for two breeds which complemented each other to serve as an improved breed for the Brazilian market requirements at that time.Production and popularity of this breed as been sped up due to its high productivity in terms of fertility and efficiency plus, the efforts of the governmental project for improvement called 'Program Girolando'. ")}<h5>Brands</h5>${MilkBrand("Itambé Dairy Brands", "https://www.itambe.com.br/", "Brazil")}`
    },
    {
        name: "Chile",
        location: [-33.26, -70.40],
        content: `${CowBrand("Holstein-Friesian Cow Breed", "The desired milk fat is 3.9%, milk protein is 3.4%, and lipogenic balance is 28%.", "Northern Chile can be stiflingly hot, that predisposes the region to corral-type systems. So it's typical to find higher-input, higher-yielding herds – primarily Holstein-Friesian –with fairly typical feed ingredients available and diets common to those of USA producers. Maize silage, alfalfa hay and ryegrass silage are common forages here.\nWith more plentiful rainfall, dairy production becomes more abundant as you travel south, away from the more arid conditions of the north. From the San Diego in San Diego, most of the Chilean dairy industry - about 70% of milk production is concentrated in this area. With more-plentiful rainfall and extensive expanses of land, the Osorno region is the dairy heartland and heavily grazing-focused. Here has a strong New Zealand-type production focus and some exceptional grazing systems producing 8-9,000 litres per lactation on tight spring-calving systems, including 30 to 40-day 'holiday' periods on top units. The Jersey breed and Holstein-Friesian crosses become much more common here; cows that are more-suited to extensive grazing.\nHowever, the spring flush of pasture can result in severe milk fat depression. Low fibre, high sugar and elevated fat concentrations in spring grass promote classical milk fat depression resulting primarily from production of trans fatty acids in the rumen, which may lead to nutritional imbalance where milk fat 'crashes'from over 4.0% to 3.0%.")}<h5>Brands</h5>${MilkBrand("Loncoleche Dairy Brands", " https://www.watts.cl/noticias/loncoleche-protein-es-auspiciador-oficial-de-tom%C3%A1s-gonz%C3%A1lez-y-christiane-endler", "Chile")}`
    },
    {
        name: "South Africa",
        location: [51.49, 31.13],
        content: `${CowBrand("Simmental Cow Breed", "The average annual milk yield of Simmental cattle is 4300 kg and the milk fat percentage is 4.0%. For 100ml milk, it contains 3.80g protein, 4.1g fat, 5.0g carbohydrates and 120mg calcium.", "    Simmental cattle are native to the Alps in western Switzerland and are mainly produced on the Simmental and Saannen plains. It is not a pure beef, but a milk-meat breed. But because of the high milk yield, simmental cattle meat production performance is not worse than the specialized beef cattle breeds, working performance is also very good, is a large breed of milk, meat, service")}<h5>Brands</h5>${MilkBrand("Clover Dairy Brands", "https://cloversonoma.com/", "South Africa")}${MilkBrand("Checkers Dairy Brands", "https://www.checkers.co.za/", "South Africa")}${MilkBrand("Pick n Pay Dairy Brands", "ttps://www.pnp.co.za/pnpstorefront/pnp/en/PnP-UHT-Full-Cream-Milk-1l-x-6/p/000000000000349246_CS", "South Africa")}${MilkBrand("Spar Dairy Brands", "https://latomilk.com/", "South Africa")}`
    },
    {
        name: "Kenya",
        location: [-1.17, 36.49],
        content: `<h5>Brands</h5>${MilkBrand("LATO Dairy Brands", "https://latomilk.com/", " Kenya")}${MilkBrand("FRESH DAIRY Dairy Brands", "https://www.morningfreshdairy.com/", "Kenya")}`
    },
    {
        name: "Australia",
        location: [-37.5, 144.92],
        content: `${CowBrand("Australian Friesian Sahiwal (AFS) Cow Breed", "This breed is more suitable for raising dairy cows in tropical areas, and the milk yield is also high under the grazing conditions of tropical grassland. According to the official statistics of Australia in 2000, the milk yield of 293d was 4458L (about 4574kg). This breed of cattle is heat-resistant, moisture resistant, antibody ectoparasites and some other parasites.", "Under the organization of the Queensland government, the breeding of AFS cattle began in the 1960s and was bred through the hybridization of shaxihua (rumen cattle) and frisheng. In 1994, AFS breeding program was incorporated into Australian Rab to continue variety breeding, genetic gene management and progeny determination of AFS bulls. Due to the poor performance of dairy cows in tick resistance, heat resistance and moisture resistance, the milk yield is poor in tropical grassland. The breeding of AFS is to adapt to this environment and effectively improve the milk yield. Now AFS has been successfully exported to tropical countries such as Southeast Asia, central and South America and the Indian subcontinent.")}<h5>Brands</h5>${MilkBrand("ALDI Farmdale Dairy Brand", "https://www.aldi.com.au/en/groceries/fresh-produce/dairy-eggs/", "Australia")}${MilkBrand("Norco Dairy Brand", "https://www.norco.com.au/", "Australia")}${MilkBrand("Pura Dairy Brand", "http://www.pura.com.au/", "Australia")}${MilkBrand("Pauls Dairy Brand", "https://www.pauls.com.au/products/milk/", "Australia")}`
    },
    {
        name: "New Zealand",
        location: [-36.51, 174.45],
        content: `${CowBrand("Kiwi-Cross Cow Breed", "The offspring of the cross between Holstein cattle and Juan Shan cattle have the body shape between the two breeds and have the advantages of the two breeds, that is, their milk production ability is closer to Holstein cattle and the milk dry matter content is closer to Juan Shan cattle. Moreover, due to its heterosis, hybrid cattle have stronger stress resistance and survivability, as well as stronger and perfect breasts, excellent production life and easy production. According to the survey, its pregnancy period is shorter than that of Holstein cattle, which is more conducive to the realization of the unique compact calving cycle in New Zealand. The average of the KC for fat, protein, and total solids values was 4±0.08, 3.37±0.04, and 13.33±0.17, respectively.", "Dairy farming in New Zealand began in 1840. Juan Shan cattle were introduced into New Zealand in 1862, Holstein cattle were introduced into South Island of New Zealand in 1884 and North Island in 1888. New Zealand has been carrying out hybrid production of dairy cows and breeding of hybrid bulls for decades.")}${CowBrand("Holstein-Friesians Cow Breed", "Compared to jerseys, holstein-friesians are large (weighing over half a tonne) and their milk has high concentrations of protein and lactose.", "    The most common cow in the world, the black-and-white holstein-friesian comes from northern Holland and was first imported into New Zealand by Canterbury farmer John Grigg in 1884. Four years later it arrived in the North Island.The breed was boosted with the addition of large numbers imported from the United States in 1902–1903.")}${CowBrand("Jerseys Cow Breed", "Jerseys produce 13 per cent more fat and 9 per cent more milksolids than other breeds for their weight. Because more jerseys can be stocked per hectare, they became the number one breed in Taranaki, where farms were smaller.", "The tan-coloured jersey cow was the next breed imported in 1862 to Wanganui, and became popular because it gave more butterfat per litre of milk, and was smaller and easier to handle. In recent years, as the medical profession has changed its position on animal fat to regard it as healthy, and the jersey has come back into fashion. Five years ago, milk fat was worth one-third of milk protein value. Now a kilo of fat will be earning suppliers significantly more than a kilo of protein. Fans of the jersey view it as the most sustainable of the common dairy breeds. It produces about 8 per cent more profit and is regarded as kinder on the environment.")}${MilkBrand("Anchor Dairy Brand", "https://www.anchordairy.com/nz/en/products.html", " Fonterra Co-operative Group Limited, New Zealand")}${MilkBrand("NZMP Dairy Brand", "https://www.nzmp.com/global/en.html", " Fonterra Co-operative Group Limited, New Zealand")}`
    }
]

export let colorArray = [
    "#1abc9c", "#8e44ad", "#f1c40f", "#2c3e50", "#c0392b", "#8c7ae6", "#00a8ff", "#44bd32", "#0097e6", "#1289A7", "#9980FA", "#EA2027", "#833471", "#1e272e"
]

export const CalciumData = [
    {
        brand: "WDOM",
        value: "133"
    },
    {
        brand: "Meadow Fresh Walking Cow4.0",
        value: "130"
    },

    {
        brand: "Meadow Fresh",
        value: "125"
    },
    {
        brand: "Sternenfair",
        value: "124"
    },
    {
        brand: "Lacheer Fresh",
        value: "124"
    },
    {
        brand: "MUH",
        value: "124"
    },
    {
        brand: "Flevomel",
        value: "124"
    },
    {
        brand: "The Land(Blue)",
        value: "122"
    },
    {
        brand: "The Land(White)",
        value: "122"
    },
    {
        brand: "Erie Satine",
        value: "120"
    },
    {
        brand: "Ranchétté SLVA",
        value: "120"
    },
    {
        brand: "Ranchétté",
        value: "120"
    },
    {
        brand: "Valio",
        value: "120"
    },
    {
        brand: "Vega",
        value: "120"
    }
]

export
    const ProteinData = [
        {
            brand: "Erie Satine",
            value: 4
        },
        {
            brand: "WDOM",
            value: 4
        },
        {
            brand: "The Land(White)",
            value: 4
        },
        {
            brand: "adow Fresh Walking Cow 4.0",
            value: 4
        },
        {
            brand: "Flevomel",
            value: 3.7
        },
        {
            brand: "Mengniu Deluxe",
            value: 3.6
        },
        {
            brand: "Lacheer Fresh",
            value: 3.6
        },
        {
            brand: "Lacheer dinosaur",
            value: 3.6
        },
        {
            brand: "Lacheer German",
            value: 3.6
        },
        {
            brand: "Globemilk",
            value: 3.6
        },
        {
            brand: "The Land(Blue)",
            value: 3.5
        }
        ,
        {
            brand: "Meadow Fresh",
            value: 3.5
        },
        {
            brand: "Dutch Cow",
            value: 3.5
        },
        {
            brand: "Sternenfair",
            value: 3.4
        }
    ]
export const CarboData = [
    { brand: "VDevondale", value: 5.1 },
    { brand: "Valio", value: 5.0 },
    { brand: "The Land A2", value: 5.0 },
    { brand: "Dutch Cow", value: 5.0 },
    { brand: "So Natural", value: 5.0 },
    { brand: "LVLINB", value: 4.9 },
    { brand: "Lacheer Fresh", value: 4.9 },
    { brand: "Lacheer high-calcium", value: 4.9 },
    { brand: "MUN", value: 4.9 },
    { brand: "Arla", value: 4.9 },
    { brand: "Emmi", value: 4.9 },
    { brand: "Erie Satine", value: 4.8 },
    { brand: "Ranchétté SLVA", value: 4.8 },
    { brand: "Ranchétté", value: 4.8 }

]
export const FatData = [
    { brand: "WDOM", value: 5.0 },
    { brand: "The Land(White)", value: 4.0 },
    { brand: "Meadow Fresh Walking Cow 4.0", value: 4.0 },
    { brand: "Sternenfair", value: 3.9 },
    { brand: "Erie Satine", value: 3.8 },
    { brand: "Dutch Cow", value: 3.8 },
    { brand: "Ranchétté SLVA", value: 3.6 },
    { brand: "Ranchétté", value: 3.6 },
    { brand: "Valio", value: 3.6 },
    { brand: "Vega", value: 3.6 },
    { brand: "Sunsides French", value: 3.6 },
    { brand: "Sunsides German", value: 3.6 },
    { brand: "The Land A2", value: 3.6 },
    { brand: "LVLINB", value: 3.6 }
]