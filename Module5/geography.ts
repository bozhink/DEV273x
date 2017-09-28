module Geography {

    interface IRanges { }

    class Mountains implements IRanges { }

    class WashingtonMountains<T extends IRanges>{
        mountains: T[] = [];
    }
}

module Population {
    class PopulationByRegion { }

    class Nationality { }
}

class Lookup {
    static COUNTRY_CODE_REQUIRED: boolean = true;
    static GEOGRAPHY_CODE_REQUIRED: boolean = false;

}