export interface IHotel {
  id: string;
  name: string;
  address: string;
  stars: string;
  img: string;
  short: string;
  ident: string;
  name_rus?: string;
  text_rus?: string;
  address_rus?: string;
  short_rus?: string;
}

export interface IAttraction {
  id: string;
  address?: string;
  name: string;
  img?: string;
  text: string;
  ident?: string;
  images?: IImages[];
  name_rus?: string;
  address_rus?: string;
  text_rus?: string;
}

export interface IImages {
  original: string;
  thumbnail: string;
}

export interface IAttractionList {
  attractions: IAttraction[];
}


export interface IHotelList {
  hotels: IHotel[];
}


export interface IHotelDetailsApi {
  id: string;
  name: string;
  address: string;
  stars?: string;
  img?: string;
  text: string;
  ident?: string;
  feature: string;
  facilities: string;
  services: string;
  images: IImages[];
  name_rus: string;
  address_rus: string;
  feature_rus: string;
  facilities_rus: string;
  services_rus: string;
  text_rus: string;
}

export interface IHotelDetails {
  hotel: IHotelDetailsApi;
}

export interface IDetails {
  details: string[];
}

export interface IDetail {
  detail: string;
}

// export interface IExample {
//   ident: string;
// }

// export interface IExample2 extends IExample {
//   id: string;
//   name: string;
//   img: string;
//   text: string;
// }


export interface IArticle {
  id: string;
  name: string;
  img: string;
  text: string;
  ident: string;
  link: string;
  title: string;
  description: string;
  keywords: string;
}

export interface IArticleRus {
  id: string;
  name_rus: string;
  img: string;
  text_rus: string;
  ident: string;
  link: string;
  title_rus: string;
  description_rus: string;
  keywords_rus: string;
}

export interface IValue {
  value?: string;
  id?: string;
}