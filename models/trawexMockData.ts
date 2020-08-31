import { resolve } from 'dns';
import { rejects } from 'assert';
import { promises } from 'fs';

class TrawexMockData {
  constructor() {
  }  
  
  getHotels() : any {
    return {
      "status": {
          "sessionId": "TVRVNU9EZzFNek00TVY4ek1qSmZOell1TVRjd0xqazNMamMzXzA=",
          "moreResults": true,
          "nextToken": "MjE=",
          "totalResults": 437
      },
      "itineraries": [
          {
              "hotelId": "145543",
              "twxHotelId": "655887",
              "productId": "trx109",
              "tokenId": "0qrT2oxXdEhlpvWjIZK7",
              "hotelName": "Cranbrook Hotel",
              "city": "LONDON",
              "locality": "ilford",
              "distanceValue": 15.300000000000000710542735760100185871124267578125,
              "distanceUnit": "KM",
              "country": "England",
              "countryCode": "GB",
              "address": "CONVENTRY ROAD, 22-24",
              "latitude": "51.563519",
              "longitude": "0.070703",
              "hotelRating": 2,
              "total": 4909.8800000000001091393642127513885498046875,
              "currency": "INR",
              "fareType": "Non-Refundable",
              "propertyType": "HOTEL",
              "postalCode": "IG14QR",
              "phone": "02085546544,02085546544,02085181463",
              "email": "CHOTEL@HOTMAIL.CO.UK",
              "thumbNailUrl": "https://www.hotelbeds.com/giata/14/145543/145543a_hb_ro_010.jpg",
              "facilities": [
                  "Cable_satellite TV",
                  "Wi-Fi",
                  "Bath"
              ],
              "tripAdvisorRating": null,
              "tripAdvisorReview": null,
              "special": ""
          },
          {
              "hotelId": "145542",
              "twxHotelId": "1046058",
              "productId": "trx109",
              "tokenId": "ewoB3xiVfbjI1Td2WsAk",
              "hotelName": "Best Western Ilford",
              "city": "LONDON",
              "locality": "ilford",
              "distanceValue": 14.9199999999999999289457264239899814128875732421875,
              "distanceUnit": "KM",
              "country": "United Kingdom",
              "countryCode": "GB",
              "address": "Argyle Road, Ilford, Essex, 3-5",
              "latitude": "51.5601251",
              "longitude": "0.0673417",
              "hotelRating": 3,
              "total": 5576.8100000000004001776687800884246826171875,
              "currency": "INR",
              "fareType": "Non-Refundable",
              "propertyType": "HOTEL",
              "postalCode": "IG1 3BH",
              "phone": "02089116083,02089116083,02084789674",
              "email": "INFO@ILFORDHOTEL.COM",
              "thumbNailUrl": "https://www.hotelbeds.com/giata/14/145542/145542a_hb_r_001.jpg",
              "facilities": [
                  "Wi-Fi",
                  "Bath",
                  "Room Service",
                  "Internet access"
              ],
              "tripAdvisorRating": null,
              "tripAdvisorReview": null,
              "special": ""
          },
          {
              "hotelId": "17415",
              "twxHotelId": "327372",
              "productId": "trx109",
              "tokenId": "vwTEx9MpQ31yNH8zqYg5",
              "hotelName": "OYO Huttons Hotel",
              "city": "LONDON",
              "locality": "pimlico",
              "distanceValue": 1.4199999999999999289457264239899814128875732421875,
              "distanceUnit": "KM",
              "country": "United Kingdom",
              "countryCode": "GB",
              "address": "Belgrave Road, 53-57",
              "latitude": "51.490622",
              "longitude": "-0.138383",
              "hotelRating": 3,
              "total": 5681.3900000000003274180926382541656494140625,
              "currency": "INR",
              "fareType": "Non-Refundable",
              "propertyType": "HOTELS",
              "postalCode": "SW1V 2BB",
              "phone": "+442078343726,+442078343726,00447853838802,+442076301522",
              "email": "ota.uk@oyorooms.com",
              "thumbNailUrl": "https://www.hotelbeds.com/giata/01/017415/017415a_hb_ro_005.jpg",
              "facilities": [
                  "24-hour reception",
                  "24-hour check-in",
                  "Lift",
                  "Bar",
                  "Casino",
                  "Restaurant",
                  "Internet access",
                  "WLAN access"
              ],
              "tripAdvisorRating": "3.5",
              "tripAdvisorReview": "1543",
              "special": ""
          },
          {
              "hotelId": "313848",
              "twxHotelId": "1243672",
              "productId": "trx109",
              "tokenId": "db2yrXSp8TxkzaGMi9t5",
              "hotelName": "OYO Vegas Hotel",
              "city": "LONDON",
              "locality": "london",
              "distanceValue": 1.6100000000000000976996261670137755572795867919921875,
              "distanceUnit": "KM",
              "country": null,
              "countryCode": "GB",
              "address": "Warwick Way, Victoria, 104",
              "latitude": "51.491146",
              "longitude": "-0.143293",
              "hotelRating": 3,
              "total": 5685.0399999999999636202119290828704833984375,
              "currency": "INR",
              "fareType": "Non-Refundable",
              "propertyType": "HOTEL",
              "postalCode": "SW1V 1SD",
              "phone": "+442078340082,+442078340082",
              "email": "OTA.UK@OYOROOMS.COM",
              "thumbNailUrl": "https://www.hotelbeds.com/giata/31/313848/313848a_hb_r_001.jpg",
              "facilities": [
                  "Wi-Fi",
                  "Bath",
                  "Room Service",
                  "Internet access"
              ],
              "tripAdvisorRating": null,
              "tripAdvisorReview": null,
              "special": ""
          },
          {
              "hotelId": "312581",
              "twxHotelId": "83272",
              "productId": "trx109",
              "tokenId": "M1j3VkYXeBizPELp4mqv",
              "hotelName": "Carlton Hotel",
              "city": "LONDON",
              "locality": "king's cross",
              "distanceValue": 1.4499999999999999555910790149937383830547332763671875,
              "distanceUnit": "KM",
              "country": "United Kingdom",
              "countryCode": "GB",
              "address": "Belgrave Road, 90 4",
              "latitude": "51.490082",
              "longitude": "-0.137815",
              "hotelRating": 3,
              "total": 5759.6400000000003274180926382541656494140625,
              "currency": "INR",
              "fareType": "Non-Refundable",
              "propertyType": "HOTELS",
              "postalCode": "SW1V 2BJ",
              "phone": "00442079766634,442079766634,442078218020",
              "email": "info@cityhotelcarlton.co.uk",
              "thumbNailUrl": "https://www.hotelbeds.com/giata/31/312581/312581a_hb_r_001.jpg",
              "facilities": [
                  "Wi-Fi",
                  "Bath",
                  "Room Service",
                  "Internet access"
              ],
              "tripAdvisorRating": null,
              "tripAdvisorReview": null,
              "special": ""
          },
          {
              "hotelId": "314509",
              "twxHotelId": "133675",
              "productId": "trx109",
              "tokenId": "oA6Gkg4WtpSDz37FrsHc",
              "hotelName": "London Waterloo Hostel",
              "city": "LONDON",
              "locality": "lambeth",
              "distanceValue": 1.100000000000000088817841970012523233890533447265625,
              "distanceUnit": "KM",
              "country": "United Kingdom",
              "countryCode": "GB",
              "address": "Lambeth Walk 73, 73",
              "latitude": "51.49433",
              "longitude": "-0.1145236",
              "hotelRating": 3,
              "total": 5825.4499999999998181010596454143524169921875,
              "currency": "INR",
              "fareType": "Non-Refundable",
              "propertyType": "HOSTELS",
              "postalCode": "SE11 6DX",
              "phone": "+44 20 75 82 30 88,+44 20 75 82 30 88",
              "email": "info@londonwaterloohostel.com",
              "thumbNailUrl": "https://www.hotelbeds.com/giata/31/314509/314509a_hb_a_010.jpg",
              "facilities": [
                  "Internet access",
                  "WLAN access"
              ],
              "tripAdvisorRating": null,
              "tripAdvisorReview": null,
              "special": ""
          },
          {
              "hotelId": "314819",
              "twxHotelId": "1244670",
              "productId": "trx109",
              "tokenId": "QmiEIPb5nBL0F4f86SX9",
              "hotelName": "Colliers",
              "city": "LONDON ",
              "locality": "london ",
              "distanceValue": 1.600000000000000088817841970012523233890533447265625,
              "distanceUnit": "KM",
              "country": null,
              "countryCode": "GB",
              "address": "95-97 Warwick Way, 95/97",
              "latitude": "51.4913216",
              "longitude": "-0.14354500000001735",
              "hotelRating": 2,
              "total": 5992.1899999999995998223312199115753173828125,
              "currency": "INR",
              "fareType": "Refundable",
              "propertyType": "HOTEL",
              "postalCode": "SW1V 1QL ",
              "phone": "02078287111,02078287111",
              "email": "info@colliershotel.co.uk ",
              "thumbNailUrl": "https://www.hotelbeds.com/giata/31/314819/314819a_hb_r_001.jpg",
              "facilities": [
                  "Wi-Fi",
                  "Bath",
                  "Room Service",
                  "Internet access"
              ],
              "tripAdvisorRating": null,
              "tripAdvisorReview": null,
              "special": ""
          },
          {
              "hotelId": "237348",
              "twxHotelId": "1046056",
              "productId": "trx109",
              "tokenId": "xuRXeVjA3LCS1gGWbZrf",
              "hotelName": "Travelodge Woolwich",
              "city": "LONDON",
              "locality": "woolwich",
              "distanceValue": 13.3499999999999996447286321199499070644378662109375,
              "distanceUnit": "KM",
              "country": "United Kingdom",
              "countryCode": "GB",
              "address": "125-157 Powis Street Woolwich",
              "latitude": "51.4917",
              "longitude": "0.065947",
              "hotelRating": 3,
              "total": 6025.09000000000014551915228366851806640625,
              "currency": "INR",
              "fareType": "Non-Refundable",
              "propertyType": "HOTEL",
              "postalCode": "SE18 6LQ",
              "phone": "+448719846510,+448719846510",
              "email": "OTA@travelodge.co.uk",
              "thumbNailUrl": "https://www.hotelbeds.com/giata/23/237348/237348a_hb_r_001.jpg",
              "facilities": [
                  "Wi-Fi",
                  "Bath",
                  "Room Service",
                  "Internet access"
              ],
              "tripAdvisorRating": "4.0",
              "tripAdvisorReview": "485",
              "special": ""
          },
          {
              "hotelId": "133597",
              "twxHotelId": "1344200",
              "productId": "trx109",
              "tokenId": "FXgaOo92L3ZIQ0NMHn4l",
              "hotelName": "OYO The Park Hotel",
              "city": "LONDON",
              "locality": "london",
              "distanceValue": 1.4499999999999999555910790149937383830547332763671875,
              "distanceUnit": "KM",
              "country": "UK",
              "countryCode": "GB",
              "address": "BELGRAVE ROAD, 64",
              "latitude": "51.4906027606081",
              "longitude": "-0.139075890183449",
              "hotelRating": 1,
              "total": 6088.7200000000002546585164964199066162109375,
              "currency": "INR",
              "fareType": "Non-Refundable",
              "propertyType": "HOTEL",
              "postalCode": "SW1V 2BP",
              "phone": "+44 2078343118,+44 2078343118,00442072244405",
              "email": "INFO@THEPARKHOTELLONDON.CO.UK",
              "thumbNailUrl": "https://www.hotelbeds.com/giata/13/133597/133597a_hb_r_001.jpg",
              "facilities": [
                  "Wi-Fi",
                  "Bath",
                  "Room Service",
                  "Internet access"
              ],
              "tripAdvisorRating": null,
              "tripAdvisorReview": null,
              "special": ""
          },
          {
              "hotelId": "247564",
              "twxHotelId": "75107",
              "productId": "trx104",
              "tokenId": "ghfb3vVNSrFluAyJTOae",
              "hotelName": "TRAVELODGE GATWICK CENTRAL AIRPORT",
              "city": "Horley",
              "locality": "horley",
              "distanceValue": 37.42999999999999971578290569595992565155029296875,
              "distanceUnit": "KM",
              "country": "United Kingdom",
              "countryCode": "GB",
              "address": "Povey Cross Road, GatwickRH6 0BE Horley, Gatwick, RH6 0BE, United Kingdom, United Kingdom",
              "latitude": "51.1659535",
              "longitude": "-0.17794839999999998",
              "hotelRating": 4,
              "total": 6215.9600000000000363797880709171295166015625,
              "currency": "INR",
              "fareType": "Non-Refundable",
              "propertyType": "AIRPORT HOTELS",
              "postalCode": "RH6 0BE",
              "phone": "+08719846506",
              "email": "travel.trade@travelodge.co.uk",
              "thumbNailUrl": "https://cdn.tourismcloudservice.com/HotelsV3/247564/2013918122320866_t.jpg",
              "facilities": [
                  "24-hour reception",
                  "Lift",
                  "Bar",
                  "Restaurant",
                  "Conference Room",
                  "Internet access",
                  "WLAN access",
                  "Car Park"
              ],
              "tripAdvisorRating": null,
              "tripAdvisorReview": null,
              "special": ""
          },
          {
              "hotelId": "87280",
              "twxHotelId": "1189440",
              "productId": "trx109",
              "tokenId": "zsd6DRTGAUFbo98tWrCj",
              "hotelName": "St. Mark Hotel",
              "city": "LONDON",
              "locality": "london",
              "distanceValue": 4.53000000000000024868995751603506505489349365234375,
              "distanceUnit": "KM",
              "country": null,
              "countryCode": "GB",
              "address": "4 BARKSTON GARDENS, 4",
              "latitude": "51.492743",
              "longitude": "-0.19042",
              "hotelRating": 3,
              "total": 6349.0600000000004001776687800884246826171875,
              "currency": "INR",
              "fareType": "Non-Refundable",
              "propertyType": "HOTEL",
              "postalCode": "SW5 0EN",
              "phone": "01293608608,02073730060",
              "email": "info@st-markhotel.co.uk",
              "thumbNailUrl": "https://www.hotelbeds.com/giata/08/087280/087280a_hb_ro_005.jpg",
              "facilities": [
                  "Wi-Fi",
                  "Bath",
                  "Room Service",
                  "Internet access"
              ],
              "tripAdvisorRating": null,
              "tripAdvisorReview": null,
              "special": ""
          },
          {
              "hotelId": "4231",
              "twxHotelId": "292216",
              "productId": "trx104",
              "tokenId": "ghfb3vVNSrFluAyJTOae",
              "hotelName": "HOLIDAY INN LONDON GATWICK - WORTH",
              "city": "Crawley",
              "locality": "crawley",
              "distanceValue": 42.50999999999999801048033987171947956085205078125,
              "distanceUnit": "KM",
              "country": "United Kingdom",
              "countryCode": "GB",
              "address": "Crabbet Park Turners Hill Road Worth, Turners Hill RoadWorthCrawley RH10 4SS, Crawley, RH10 4SS, Uni",
              "latitude": "51.1187332",
              "longitude": "-0.1353258",
              "hotelRating": 4,
              "total": 6362.2200000000002546585164964199066162109375,
              "currency": "INR",
              "fareType": "Non-Refundable",
              "propertyType": "HOTELS",
              "postalCode": "RH10 4SS",
              "phone": "441293884806",
              "email": "info@higatwickworth.co.uk",
              "thumbNailUrl": "https://i.travelapi.com/hotels/1000000/70000/65800/65799/8c286c72_t.jpg",
              "facilities": [
                  "Air conditioning",
                  "Cafe",
                  "Shops",
                  "Bar",
                  "Theatre",
                  "Restaurant",
                  "Conference Room",
                  "Internet access",
                  "WLAN access",
                  "Room Service",
                  "Laundry Service",
                  "Car Park"
              ],
              "tripAdvisorRating": null,
              "tripAdvisorReview": null,
              "special": ""
          },
          {
              "hotelId": "314688",
              "twxHotelId": "1244522",
              "productId": "trx109",
              "tokenId": "ho9GTueNXfvrwqcd3yt0",
              "hotelName": "OYO Amsterdam Hotel",
              "city": "LONDON",
              "locality": "london ",
              "distanceValue": 4.79999999999999982236431605997495353221893310546875,
              "distanceUnit": "KM",
              "country": null,
              "countryCode": "GB",
              "address": "Trebovir Road, 7",
              "latitude": "51.49229",
              "longitude": "-0.1942831",
              "hotelRating": 3,
              "total": 6427.3000000000001818989403545856475830078125,
              "currency": "INR",
              "fareType": "Non-Refundable",
              "propertyType": "HOTEL",
              "postalCode": "SW5 9LS",
              "phone": "+884146152692,+884146152692",
              "email": "reservations@amsterdam-hotel.com",
              "thumbNailUrl": "https://www.hotelbeds.com/giata/31/314683/314683a_hb_a_006.jpg",
              "facilities": [
                  "Wi-Fi",
                  "Bath",
                  "Room Service",
                  "Internet access"
              ],
              "tripAdvisorRating": null,
              "tripAdvisorReview": null,
              "special": ""
          },
          {
              "hotelId": "140388",
              "twxHotelId": "1200843",
              "productId": "trx109",
              "tokenId": "atUf0K1WjMckgb9G36PQ",
              "hotelName": "Ibis London East Barking ",
              "city": "London",
              "locality": "london",
              "distanceValue": 14.17999999999999971578290569595992565155029296875,
              "distanceUnit": "KM",
              "country": null,
              "countryCode": "GB",
              "address": "HIGBRIDGE ROAD",
              "latitude": "51.533763",
              "longitude": "0.071731",
              "hotelRating": 3,
              "total": 6439,
              "currency": "INR",
              "fareType": "Non-Refundable",
              "propertyType": "HOTEL",
              "postalCode": "IG11 7BA",
              "phone": "1293819120,02084774100,02084774101",
              "email": "H2042@ACCOR.COM",
              "thumbNailUrl": "https://www.hotelbeds.com/giata/14/140388/140388a_hb_r_001.jpg",
              "facilities": [
                  "Wi-Fi",
                  "Bath",
                  "Room Service",
                  "Internet access"
              ],
              "tripAdvisorRating": null,
              "tripAdvisorReview": null,
              "special": ""
          },
          {
              "hotelId": "14991",
              "twxHotelId": "184974",
              "productId": "trx109",
              "tokenId": "KqpcbHg5FGJalIhYSkMr",
              "hotelName": "Lords",
              "city": "LONDON",
              "locality": "notting hill gate",
              "distanceValue": 4.769999999999999573674358543939888477325439453125,
              "distanceUnit": "KM",
              "country": "United Kingdom",
              "countryCode": "GB",
              "address": "LEINSTER SQUARE, 20-22",
              "latitude": "51.5143",
              "longitude": "-0.191818",
              "hotelRating": 2,
              "total": 6507.010000000000218278728425502777099609375,
              "currency": "INR",
              "fareType": "Non-Refundable",
              "propertyType": "HOTELS",
              "postalCode": "W2 4PR",
              "phone": "+442072298877,+442072298877,+442072298377",
              "email": "reservations@lordshotellondon.co.uk",
              "thumbNailUrl": "https://www.hotelbeds.com/giata/01/014991/014991a_hb_ro_029.jpg",
              "facilities": [
                  "24-hour reception",
                  "24-hour check-in",
                  "Conference Room",
                  "Bicycle",
                  "Car Park",
                  "TV Room"
              ],
              "tripAdvisorRating": null,
              "tripAdvisorReview": null,
              "special": ""
          },
          {
              "hotelId": "476393",
              "twxHotelId": "255628",
              "productId": "trx104",
              "tokenId": "ghfb3vVNSrFluAyJTOae",
              "hotelName": "LITTLE FOXES",
              "city": "Surrey",
              "locality": "crawley",
              "distanceValue": 41.22999999999999687361196265555918216705322265625,
              "distanceUnit": "KM",
              "country": "United Kingdom",
              "countryCode": "GB",
              "address": "Charlwood Road, Crawley, West Sussex RH11 0JY, GB",
              "latitude": "51.1349454",
              "longitude": "-0.22108599999999998",
              "hotelRating": 3,
              "total": 6508.47999999999956344254314899444580078125,
              "currency": "INR",
              "fareType": "Non-Refundable",
              "propertyType": "GUEST HOUSES",
              "postalCode": "RH11 0JY",
              "phone": "+441293529206",
              "email": null,
              "thumbNailUrl": "https://i.travelapi.com/hotels/6000000/5440000/5434500/5434482/205f9e3e_t.jpg",
              "facilities": [
                  "Restaurant",
                  "Internet access",
                  "WLAN access",
                  "Car Park"
              ],
              "tripAdvisorRating": null,
              "tripAdvisorReview": null,
              "special": ""
          },
          {
              "hotelId": "231087",
              "twxHotelId": "195956",
              "productId": "trx109",
              "tokenId": "nKLjbg5EyX7tfw4zPiQG",
              "hotelName": "Best Western Greater London",
              "city": "LONDON",
              "locality": "ilford",
              "distanceValue": 15.0800000000000000710542735760100185871124267578125,
              "distanceUnit": "KM",
              "country": "United Kingdom",
              "countryCode": "GB",
              "address": "CRANBROOK ROAD, 60",
              "latitude": "51.560418",
              "longitude": "0.069713",
              "hotelRating": 4,
              "total": 6537.72999999999956344254314899444580078125,
              "currency": "INR",
              "fareType": "Non-Refundable",
              "propertyType": "HOTELS",
              "postalCode": "IG1 4NH",
              "phone": "004402085140444,004402085140444,004402085530605",
              "email": "info@bestwesterngreaterlondon.com",
              "thumbNailUrl": "https://www.hotelbeds.com/giata/23/231087/231087a_hb_a_072.jpg",
              "facilities": [
                  "Conference Room",
                  "Room Service"
              ],
              "tripAdvisorRating": null,
              "tripAdvisorReview": null,
              "special": ""
          },
          {
              "hotelId": "148614",
              "twxHotelId": "108399",
              "productId": "trx109",
              "tokenId": "v8J0Zt5RICdgHwrG4QAk",
              "hotelName": "New Cross Inn Hostel",
              "city": "LONDON",
              "locality": "new cross",
              "distanceValue": 6.78000000000000024868995751603506505489349365234375,
              "distanceUnit": "KM",
              "country": "United Kingdom",
              "countryCode": "GB",
              "address": "NEW CROSS ROAD, 323A",
              "latitude": "51.4757899",
              "longitude": "-0.0371627",
              "hotelRating": 2,
              "total": 6577.2200000000002546585164964199066162109375,
              "currency": "INR",
              "fareType": "Non-Refundable",
              "propertyType": "HOSTELS",
              "postalCode": "SE14 6AS",
              "phone": "02086917222,02086917222,8721156067",
              "email": "newcrossinn@hotmail.co.uk",
              "thumbNailUrl": "https://www.hotelbeds.com/giata/14/148614/148614a_hb_l_003.jpg",
              "facilities": [
                  "24-hour reception",
                  "Pub",
                  "Internet access",
                  "WLAN access",
                  "Laundry Service",
                  "TV Room"
              ],
              "tripAdvisorRating": null,
              "tripAdvisorReview": null,
              "special": ""
          },
          {
              "hotelId": "173632",
              "twxHotelId": "368543",
              "productId": "trx109",
              "tokenId": "RodgWN3qrGfcvixjUAMY",
              "hotelName": "Smart Hyde Park View",
              "city": "LONDON",
              "locality": "bayswater",
              "distanceValue": 4.0999999999999996447286321199499070644378662109375,
              "distanceUnit": "KM",
              "country": "United Kingdom",
              "countryCode": "GB",
              "address": "LEINSTER TERRACE, 16",
              "latitude": "51.5116961681223",
              "longitude": "-0.183061435818672",
              "hotelRating": 1,
              "total": 6657.65999999999985448084771633148193359375,
              "currency": "INR",
              "fareType": "Refundable",
              "propertyType": "HOTELS",
              "postalCode": "W2 3EU",
              "phone": "442074862420,442074862420,00442074024101,004402072622083",
              "email": "groupbookings@smartbackpackers.com",
              "thumbNailUrl": "https://www.hotelbeds.com/giata/17/173632/173632a_hb_a_010.jpg",
              "facilities": [
                  "24-hour reception",
                  "24-hour check-in",
                  "Lift",
                  "Cafe",
                  "Shops",
                  "Games room",
                  "Internet access",
                  "WLAN access",
                  "Laundry Service",
                  "Car Park",
                  "Laundry Facilities"
              ],
              "tripAdvisorRating": "3.0",
              "tripAdvisorReview": "490",
              "special": ""
          },
          {
              "hotelId": "317055",
              "twxHotelId": "1246607",
              "productId": "trx109",
              "tokenId": "N3v9S14YLpbs8U2BOQ0J",
              "hotelName": "OYO Anchor Hotel",
              "city": "London",
              "locality": "barnet-cricklewood",
              "distanceValue": 9.0299999999999993605115378159098327159881591796875,
              "distanceUnit": "KM",
              "country": null,
              "countryCode": "GB",
              "address": "West Heath Drive Golders Green",
              "latitude": "51.570619",
              "longitude": "-0.1936084",
              "hotelRating": 3,
              "total": 6765.8900000000003274180926382541656494140625,
              "currency": "INR",
              "fareType": "Non-Refundable",
              "propertyType": "HOTEL",
              "postalCode": "NW11 7QH",
              "phone": "+00442084588764,+442084588764,00442084588764",
              "email": "ota.uk@oyorooms.com",
              "thumbNailUrl": "https://www.hotelbeds.com/giata/31/317055/317055a_hb_r_001.jpg",
              "facilities": [
                  "Wi-Fi",
                  "Bath",
                  "Room Service",
                  "Internet access"
              ],
              "tripAdvisorRating": null,
              "tripAdvisorReview": null,
              "special": ""
          }
      ]
  }

  }
};
const trawexMockData = new TrawexMockData();
export default trawexMockData;