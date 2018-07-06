import {BASE_URL, GEO_KEY} from './keys'

class Geocode {
  
	generateUrl(address) {
		return BASE_URL + address + '&key=' + GEO_KEY
	}


}

export default Geocode;
