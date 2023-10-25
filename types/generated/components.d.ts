import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksFooter extends Schema.Component {
  collectionName: 'components_blocks_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    title: Attribute.String;
    descriiption: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    description: Attribute.Text;
    link: Attribute.Component<'elements.button-link'>;
    media: Attribute.Media;
    title: Attribute.String;
  };
}

export interface BlocksProducts extends Schema.Component {
  collectionName: 'components_blocks_products';
  info: {
    displayName: 'Products';
    description: '';
  };
  attributes: {
    library: Attribute.Component<'elements.card', true>;
  };
}

export interface BlocksRow extends Schema.Component {
  collectionName: 'components_blocks_rows';
  info: {
    displayName: 'Row';
  };
  attributes: {
    card: Attribute.Component<'elements.card', true>;
  };
}

export interface ElementsButtonLink extends Schema.Component {
  collectionName: 'components_elements_button_links';
  info: {
    displayName: 'Button Link';
  };
  attributes: {
    content: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    type: Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

export interface ElementsCard extends Schema.Component {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'card';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface SeoMetaData extends Schema.Component {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'Meta Data';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    metaImage: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.footer': BlocksFooter;
      'blocks.hero': BlocksHero;
      'blocks.products': BlocksProducts;
      'blocks.row': BlocksRow;
      'elements.button-link': ElementsButtonLink;
      'elements.card': ElementsCard;
      'seo.meta-data': SeoMetaData;
    }
  }
}
