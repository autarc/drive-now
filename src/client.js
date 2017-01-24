/**
 * # Client
 *
 * Network request client for the API.
 *
 * NOTE: data examples taken from the website: https://de.drive-now.com/en/
 */

import requestPromise from 'request-promise'

export default class Client {
  constructor(options = {}) {

    this.options = {
      // different environments available:
      // - 'https://stage.service.drive-now.com/'
      // - 'https://dev.service.drive-now.com/'
      base:     options.base     || 'https://api2.drive-now.com/',
      // NOTE: copied from the website - replace with own retrieved through your account
      apikey:   options.apikey   || 'adf51226795afbc4e7575ccc124face7',
      language: options.language || 'en'
    }
  }

  get(path, query, callback) {

    if (path.charAt(0) === '/') {
      path = path.substr(1)
    }

    const url = (/https?:/).test(path) ? path : `${this.options.base}${path}`

    const options = {
      headers: {
        'User-Agent': 'DriveNow | Unofficial API Client',
        'X-Api-Key': this.options.apikey,
        'X-Language': this.options.language
      },
      gzip: true,
      json: true,
      qs: query,
      url
    }

    return requestPromise(options).promise().asCallback(callback)
  }
  // TODO: define basic HTTP method calls
  // post()
  // put()
  // delete()

  availableFeatures() {
    return this.get('availablefeatures')
  }

  cities(query = {}) {
    return this.get('cities', {
      // expand: 'cities'
      // expand: 'carTypes
      // expand: 'full' -> 504 - Gateway timeout
      ...query
    })
  }

  city(cityId, query = {}) {
    return this.get(`cities/${cityId}`, {
      // expand: 'cities'
      // expand: 'carTypes
      // expand: 'full' -> 504 - Gateway timeout
      ...query
    })
  }

  cars(cityId, query = {}) {
    return this.get(`cities/${cityId}/cars`, {
      ...query
    })
  }

  geodata(cityId, query) {
    if (query && query.mobile) {
      return this.get(`geodata/${cityId}/${cityId}_mobile.kml`)
    }
    return this.get(`geodata/${cityId}/${cityId}.kml`)
  }

  login(query = {}) {
    return this.get('rejsekort', {
      // authToken: 'token'
      ...query
    })
  }

  getBasicData(query = {}) {
    return this.get('customers/me/data', {
      // loginToken: 'token',
      ...query
    })
  }

  userStatus(query = {}) {
    return this.get('user/status', {
      ...query
    })
  }

  spec(query = {}) {
    return this.get('customers/registration/schema', {
      // corporate: ''
      ...query
    })
  }

  basicDataSchema(query = {}) {
    return this.get('customers/me/data/schema', {
      // loginToken: 'token',
      ...query
    })
  }

  getUserProfile(query = {}) {
    return this.get('legacy/user', {
      ...query
    })
  }

  getPointsOfInterests() {
    return this.get('favorites')
  }

  // changePassword() {
  //   // NOTE: use different encoding type => 'application/x-www-form-urlencoded'
  //   return this.put('/customers/me/data/identity/password', {
  //     // currentPassword: '',
  //     // newPassword: '',
  //     // token: ''
  //   })
  // }
  //
  // logout() {
  //   return this.post('/logout')
  // }
}
