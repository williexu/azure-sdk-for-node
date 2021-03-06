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
 * An image caption, i.e. a brief description of what the image depicts.
 *
 */
class ImageCaption {
  /**
   * Create a ImageCaption.
   * @member {string} [text] The text of the caption
   * @member {number} [confidence] The level of confidence the service has in
   * the caption
   */
  constructor() {
  }

  /**
   * Defines the metadata of ImageCaption
   *
   * @returns {object} metadata of ImageCaption
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ImageCaption',
      type: {
        name: 'Composite',
        className: 'ImageCaption',
        modelProperties: {
          text: {
            required: false,
            serializedName: 'text',
            type: {
              name: 'String'
            }
          },
          confidence: {
            required: false,
            serializedName: 'confidence',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = ImageCaption;
