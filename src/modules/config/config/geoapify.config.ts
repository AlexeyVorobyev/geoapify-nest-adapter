import { registerAs } from '@nestjs/config'
import * as process from 'process'

export default registerAs('geoapify', () => {
    return {
        rootApi: process.env.GEOAPIFY_ROOT_API || 'https://api.geoapify.com/v2/',
        apiKey: process.env.GEOAPIFY_API_KEY
    }
})