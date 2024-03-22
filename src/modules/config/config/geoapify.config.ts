import { registerAs } from '@nestjs/config'
import * as process from 'process'

export default registerAs('geoapify', () => {
    return {
        rootApi: process.env.GEOAPIFY_ROOT_API || 'https://api.geoapify.com/v2/',
        placesApiKey: process.env.GEOAPIFY_PLACES_API_KEY
    }
})