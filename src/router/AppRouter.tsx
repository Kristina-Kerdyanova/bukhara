import React from "react";
import { Route, Routes } from "react-router-dom";
import { DetailsHotel } from "../pages/DetailsHotel";
import { Main } from "../pages/Main";
import { Hotels } from "../pages/Hotels";
import { Attractions } from "../pages/Attractions";
import { AttractionsDetails } from "../pages/AttractionsDetails";
import { Bukhara } from "../pages/Bukhara";
import { Tours } from "../pages/Tours";
import { History } from "../pages/History";
import { MainTemplate } from "../components/MainTemplate/MainTemplate";
import { routers } from "./routers";
import { Museums } from "../pages/Museums";
import { Religion } from "../pages/Religion";
import { Airport } from "../pages/Airport";
import { AirportRus } from "../pages/AirportRus";
import { AttractionsDetailsRus } from "../pages/AttractionsDetailsRus";
import { AttractionsRus } from "../pages/AttractionsRus";
import { BukharaRus } from "../pages/BukharaRus";
import { DetailsHotelRus } from "../pages/DetailsHotelRus";
import { HistoryRus } from "../pages/HistoryRus";
import { HotelsRus } from "../pages/HotelsRus";
import { MainRus } from "../pages/MainRus";
import { MuseumsRus } from "../pages/MuseumsRus";
import { ReligionRus } from "../pages/ReligionRus";
import { ToursRus } from "../pages/ToursRus";
import { MainTemplateRus } from "../components/MainTemplate/MainTemplateRus";
import { NotFound } from "../pages/NotFound";
import { Contact } from "../pages/Contact";
import { ContactRus } from "../pages/ContactRus";

export const AppRouter = () => {
  return (
    <Routes>
       <Route element={<NotFound/>}/>
      <Route index element={<Main />} />
      <Route element={<MainTemplate />}>
        <Route path={routers.HOTELS} element={<Hotels />} />
        <Route path={routers.ATTRACTIONS} element={<Attractions />} />
        <Route
          path={routers.ATTRACTION_DETAILS}
          element={<AttractionsDetails />}
        />
        <Route path={routers.BUKHARA} element={<Bukhara />} />
        <Route path={routers.TOURS} element={<Tours />} />
        <Route path={routers.HISTORY} element={<History />} />
        <Route path={routers.MUSEUMS} element={<Museums />} />
        <Route path={routers.RELIGION} element={<Religion />} />
        <Route path={routers.AIRPORT} element={<Airport />} />
      </Route>
      <Route path={routers.HOTEL_DETAILS} element={<DetailsHotel />} />
      <Route path={routers.CONTACTS} element={<Contact />} />

      <Route path={routers.MAIN_RUS} element={<MainRus />} />
      <Route element={<MainTemplateRus />}>
        <Route path={routers.HOTELS_RUS} element={<HotelsRus />} />
        <Route path={routers.ATTRACTIONS_RUS} element={<AttractionsRus />} />
        <Route
          path={routers.ATTRACTION_DETAILS_RUS}
          element={<AttractionsDetailsRus />}
        />
        <Route path={routers.BUKHARA_RUS} element={<BukharaRus />} />
        <Route path={routers.TOURS_RUS} element={<ToursRus />} />
        <Route path={routers.HISTORY_RUS} element={<HistoryRus />} />
        <Route path={routers.MUSEUMS_RUS} element={<MuseumsRus />} />
        <Route path={routers.RELIGION_RUS} element={<ReligionRus />} />
        <Route path={routers.AIRPORT_RUS} element={<AirportRus />} />
      </Route>
      <Route path={routers.HOTEL_DETAILS_RUS} element={<DetailsHotelRus />} />
      <Route path={routers.CONTACTS_RUS} element={<ContactRus />} />
    </Routes>
  );
};
