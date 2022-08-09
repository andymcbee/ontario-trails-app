'use strict';

/**
 * cities-json service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cities-json.cities-json');
