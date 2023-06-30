export type Pet = {
    id: number
    name: string
    age: string
    description: string
    gender: string
    location: string
    breed: string
    breeder: string
    image: string
}

export interface Field {
    name: string;
    type: any;
    data?: any;
}