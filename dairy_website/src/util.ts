export function MilkBrand(name: string, link: string, milksource: string) {
    return `<h6>${name}</h6><b>link:</b><a href='${link} '>${link} </a><br/><b>milk source:</b> ${milksource}`
}
export function CowBrand(name: string, milkproduction: string, history: string) {
    return `<h6>${name}</h6><hr/><b>milk production:</b>${milkproduction}<br/><b>history:</b>${history}`
}