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
 * The response to a list data masking rules request.
 */
class DataMaskingRuleListResult extends Array {
  /**
   * Create a DataMaskingRuleListResult.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of DataMaskingRuleListResult
   *
   * @returns {object} metadata of DataMaskingRuleListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DataMaskingRuleListResult',
      type: {
        name: 'Composite',
        className: 'DataMaskingRuleListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DataMaskingRuleElementType',
                  type: {
                    name: 'Composite',
                    className: 'DataMaskingRule'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = DataMaskingRuleListResult;