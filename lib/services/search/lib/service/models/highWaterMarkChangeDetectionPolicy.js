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

const models = require('./index');

/**
 * Defines a data change detection policy that captures changes based on the
 * value of a high water mark column.
 *
 * @extends models['DataChangeDetectionPolicy']
 */
class HighWaterMarkChangeDetectionPolicy extends models['DataChangeDetectionPolicy'] {
  /**
   * Create a HighWaterMarkChangeDetectionPolicy.
   * @member {string} highWaterMarkColumnName The name of the high water mark
   * column.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of HighWaterMarkChangeDetectionPolicy
   *
   * @returns {object} metadata of HighWaterMarkChangeDetectionPolicy
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Azure.Search.HighWaterMarkChangeDetectionPolicy',
      type: {
        name: 'Composite',
        className: 'HighWaterMarkChangeDetectionPolicy',
        modelProperties: {
          odatatype: {
            required: true,
            serializedName: '@odata\\.type',
            type: {
              name: 'String'
            }
          },
          highWaterMarkColumnName: {
            required: true,
            serializedName: 'highWaterMarkColumnName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = HighWaterMarkChangeDetectionPolicy;
