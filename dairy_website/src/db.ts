export interface news {
    title: string,
    subtitle: string,
    link: string
}

export const newsarray: news[] = [
    {
        title: " Fonterra raises farmgate milk price forecast on strong dairy demand",
        subtitle: "New Zealand's Fonterra (FCG.NZ), (FSF.NZ) on Thursday raised the forecast range for the price it pays farmers for milk in the 2021/22 season, citing an increase in global dairy rates due to strong demand and tight supply. ",
        link: "https://www.reuters.com/business/fonterra-raises-farmgate-milk-price-forecast-strong-diary-demand-2022-02-23/"
    }, {
        title: "Farming in Ukraine, global food supply, milk prices and leaving farming",
        subtitle: "Charlotte Smith speaks to a farmer in Ukraine about how the season is progressing as the war continues. Meanwhile, the increased price of fuel and fertiliser is beginning to bite. Dairy farmers call for consumers to pay around fifty per cent more for their milk. ",
        link: "https://www.bbc.co.uk/programmes/m0016310"

    },
    {
        title: "Cows' paradise under threat as Azorean island trembles.",
        subtitle: "SAO JORGE, Portugal, March 28 (Reuters) - Covered in lush green pastures, Portugal's mid-Atlantic Azores archipelago is a cows' paradise. But the thousands of small earthquakes that have been rattling the volcanic island of Sao Jorge in recent days are leaving dairy farmers on edge.",
        link: "https://www.reuters.com/business/environment/cows-paradise-under-threat-azorean-island-trembles-2022-03-28/"
    },
    {
        title: "Several weeks ago, Dallas ISD launched an experiment in its cafeterias.",
        subtitle: "Several weeks ago, Dallas ISD launched an experiment in its cafeterias.",
        link: "https://www.cbsnews.com/dfw/news/dallas-isd-milk-shelf-ultra-pasteurized/?intcid=CNM-00-10abd1h"
    },
    {
        title: "Britain's cost of living crisis is pushing millions to the brink.",
        subtitle: `"Milk was 80p($1.05).The smallest one, that's gone to £1 ($1.31)," she said. "The bread — the cheapest bread that we used to do for £1 — has gone to £1.20 ($1.57)."\n Annual consumer price inflation hit 5.5% in January in the United Kingdom — its highest level since 1992 — fueled by product shortages and a sharp spike in demand as pandemic lockdowns were lifted.Wages aren't keeping pace.`,
        link: "https://www.cnn.com/2022/03/15/business/britain-cost-of-living/index.html"
    }

]


export enum category {
    COWBREED = "cow breed",
    MILKBRAND = "Milk brand"
}

export enum area {
    ASIA = "Asia",
    EUROPE = "Europe",
    SOUTH_AMERICA = "South America",
    AFRICA = "Africa",
    OCEANIA = "Oceania",
    NORTH_AMERICA = "North America",

}
export interface Image {
    title: string,
    url: string,
    category: category,
    location: area

}
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