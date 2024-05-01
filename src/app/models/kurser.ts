export interface Kurser {
    code: string,
    coursename: string,
    progression: string,
    [key: string]: any;     //används för att bli av med "Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Kurser'."  från diagrams ts-fil
}
