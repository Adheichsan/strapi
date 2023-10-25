'use strict';

/**
 * `strapiapp` middleware
 */

const populate = {
  metadata:{
    populate: {
      metaImage: {
        populate: true,
        fields: ["name", "alternativeText", "url"],
      },
    }
  },
  
  blocks: {
    populate: {
      link: {
        populate: true,
      },
      image: {
        fields: ["name", "alternativeText", "url"],
      },
      card: {
        populate: {
          image: {
            fields: ["name", "alternativeText", "url"],
          }
        }
      },
      library: {
        populate: {
          image: {
            fields: ["name", "alternativeText", "url"],
          }
        }
      }
    }
  }
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In strapiapp middleware.');
    ctx.query = {
      populate,
      ...ctx.query,
    }
    await next();
  };
};
