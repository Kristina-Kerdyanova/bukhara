import React from "react";
import recomendedHotelData from "../../recomendedHotel.json"
import { ListCardHotelContainer, ListCardHotelSubtitle, StyledListCardHotel } from "./style";
import { CardHotelRus } from "./CardHotelRus";

export const ListCardHotelRus = () => {
  return (
    <StyledListCardHotel>
      <ListCardHotelSubtitle>РЕКОМЕНДУЕМЫЕ ГОСТИНИЦЫ В БУХАРЕ</ListCardHotelSubtitle>
      <ListCardHotelContainer>
      {recomendedHotelData.map(({ ident }) => (
          <CardHotelRus ident={ident} />
        ))}
      </ListCardHotelContainer>
    </StyledListCardHotel>
  )
}




// export const ListCardHotel = ({ hotels }: IHotelList) => {
//   return (
//     <ul>
//       {hotels.map((hotels) => (
//         <CardHotel {...hotels} />
//       ))}
//     </ul>
//   );
// };

// export const ListCard = () => {
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [hotels, setHotels] = useState([]);

//   useEffect(() => {
//     const apiURL = "https://www.bukhara-hotels.com/api/hotels";
//     fetch(apiURL)
//       .then((response) => response.json())
//       .then(
//         (hotels) => {
//           setIsLoaded(true);
//           setHotels(hotels.records);
//         },
//         (error) => {
//           setIsLoaded(true);
//           setError(error);
//         }
//       );
//   }, []);

//   if (error) {
//     return <div>Ошибка</div>;
//   } else if (!isLoaded) {
//     return <div>Загрузка </div>;
//   } else {
//     return (
//       <div>
//         <ListCardHotel hotels={hotels} />
//       </div>
//     );
//   }
// };