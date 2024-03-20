/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {expect} from 'chai';
import 'mocha';
import {CamelDefinitionYaml} from "../src/core/api/CamelDefinitionYaml";
import * as fs from 'fs';

describe('Array of string', () => {

    it('Array of string', () => {
        const yaml = fs.readFileSync('test/allowableValues.camel.yaml', { encoding: 'utf8', flag: 'r' });
        const i = CamelDefinitionYaml.yamlToIntegration('allowableValues.camel.yaml', yaml);
        const yaml2 = CamelDefinitionYaml.integrationToYaml(i);
        expect(yaml2).to.equal(yaml);
    });
});
