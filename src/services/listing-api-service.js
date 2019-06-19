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
                //console.log(`responseJson to put on the page: `, responseJson)
                return responseJson
            })
            .then(listings => {

                return listings;


            })

    },
    getListing(listingId) {
        // console.log(`listing-api-srevice listingId: `, listingId)
        return fetch(`${config.API_ENDPOINT}/api/listings/${listingId}`, {
            headers: {
                'authorization': `basic ${TokenService.getAuthToken()}`
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
            .then(responseJson => {
                // console.log(`getListing(listingId) responseJson`, responseJson)
                return responseJson
            })
            .then(listing => {
                // console.log(`single listing as responseJson: `, listing)
                return listing
            })

    }
}
export default ListingApiService