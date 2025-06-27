export interface Book {
    id: string,
    name: string,
    isBestSeller: boolean,
    pages: number,
    genres: Array<string>
}

export function ObjectToBook(data: any){
    return {
        id: data.id,
        name: data.name,
        isBestSeller: data.isBestSeller,
        pages: data.pages,
        genres: data.genres
    } as Book;
}








