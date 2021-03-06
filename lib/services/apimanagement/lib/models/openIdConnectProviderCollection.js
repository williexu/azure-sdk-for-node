/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Paged OpenIdProviders list representation.
 */
class OpenIdConnectProviderCollection extends Array {
  /**
   * Create a OpenIdConnectProviderCollection.
   * @member {string} [nextLink] Next page link if any.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of OpenIdConnectProviderCollection
   *
   * @returns {object} metadata of OpenIdConnectProviderCollection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'OpenIdConnectProviderCollection',
      type: {
        name: 'Composite',
        className: 'OpenIdConnectProviderCollection',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'OpenidConnectProviderContractElementType',
                  type: {
                    name: 'Composite',
                    className: 'OpenidConnectProviderContract'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = OpenIdConnectProviderCollection;
