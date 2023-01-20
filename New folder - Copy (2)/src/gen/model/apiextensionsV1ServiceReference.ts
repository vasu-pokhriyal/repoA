/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.21.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';

/**
* ServiceReference holds a reference to Service.legacy.k8s.io
*/
export class ApiextensionsV1ServiceReference {
    /**
    * name is the name of the service. Required
    */
    'name': string;
    /**
    * namespace is the namespace of the service. Required
    */
    'namespace': string;
    /**
    * path is an optional URL path at which the webhook will be contacted.
    */
    'path'?: string;
    /**
    * port is an optional service port at which the webhook will be contacted. `port` should be a valid port number (1-65535, inclusive). Defaults to 443 for backward compatibility.
    */
    'port'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "namespace",
            "baseName": "namespace",
            "type": "string"
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string"
        },
        {
            "name": "port",
            "baseName": "port",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ApiextensionsV1ServiceReference.attributeTypeMap;
    }
}

