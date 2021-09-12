
export const firstLetterUpperCase = (string: string) : string => {
    return `${string.toUpperCase()[0]}${string.substr(1)}`
}