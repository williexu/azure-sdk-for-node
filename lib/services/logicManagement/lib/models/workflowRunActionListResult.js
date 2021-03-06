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
 * The list of workflow run actions.
 */
class WorkflowRunActionListResult extends Array {
  /**
   * Create a WorkflowRunActionListResult.
   * @member {string} [nextLink] The URL to get the next set of results.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of WorkflowRunActionListResult
   *
   * @returns {object} metadata of WorkflowRunActionListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'WorkflowRunActionListResult',
      type: {
        name: 'Composite',
        className: 'WorkflowRunActionListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'WorkflowRunActionElementType',
                  type: {
                    name: 'Composite',
                    className: 'WorkflowRunAction'
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

module.exports = WorkflowRunActionListResult;
