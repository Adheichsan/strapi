'use strict';

/**
 * metaverse router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::metaverse.metaverse', {
    config: {
        find: {
            middlewares: ['api::metaverse.strapiapp'],
        },
        findOne: {
            middlewares: ['api::metaverse.strapiapp'],
        },
    }
});
