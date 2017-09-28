interface IStreet {
    streetName: string;
}

interface ICity extends IStreet {
    cityName: string;
}

interface IAddress extends ICity {
    postalCode: number;
    countryCode?: string;
}
