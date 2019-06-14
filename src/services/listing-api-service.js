import TokenService from '../services/token-service';
import config from '../config'


const ListingApiService = {
    getAllListings() {
        return fetch(`${config.API_ENDPOINT}/api/listings`, {
            headers: {

            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
            .then(responseJson => {
                console.log(`responseJson to put on the page: `, responseJson)
                return responseJson
            })
            .then(listings => {
                console.log(`listings as responseJson : `, { listings })
                console.log(`right before setting state`)
                //this.setState({ listings })
                return listings;
                //console.log(`listings as responseJson after set state : `, { listings })

            })

    },
    getListing(listingId) {
        console.log(`listing-api-srevice listingId: `, listingId)
        return fetch(`${config.API_ENDPOINT}/listings/${listingId}`, {
            headers: {
                'authorization': `basic ${TokenService.getAuthToken()}`
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    }
}
export default ListingApiService