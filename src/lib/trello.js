import {TRELLO_KEY, TRELLO_TOKEN} from './keys'
const APTS_ID = '5b32ca88273254415587cc1e'

const BASE_URL = 'https://api.trello.com/1';

class Trello {
  
	getAptCards() {
		const url = BASE_URL + '/boards/' + APTS_ID 
			+ '/cards?key=' + TRELLO_KEY + '&token=' + TRELLO_TOKEN
			+ '&fields=id,name,desc&attachments=true';
		return url
	}
}

export default Trello;
