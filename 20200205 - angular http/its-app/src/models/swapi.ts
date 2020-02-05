
export interface SwapiPeopleResponse {
    count: number;
    next: string;
    previous: string;
    results: SwapiPerson[];
}

export interface SwapiPerson {
    name: string;
    height: string;
    mass: string;
}
