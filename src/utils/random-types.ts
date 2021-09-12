import images from "../assets/pictures/images"

export const randomTypes = (type:string) => {
    const selected = []
    for(let i = 0; i < 2; i++){
        const opponentType = images[Math.floor(Math.random() * (17 - 1 + 1) + 0)].type
        if(type !== opponentType) selected.push(opponentType)
    }
    return selected;
}