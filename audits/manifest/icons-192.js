/**
 * @license
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const Audit = require('../audit');

class ManifestIcons192 extends Audit {

  static get tags() {
    return ['Manifest'];
  }

  static get name() {
    return 'manifest-icons-192';
  }

  static get description() {
    return 'Contains 192px icons';
  }

  static audit(inputs) {
    let hasIcons = false;
    const manifest = inputs.manifest;

    if (manifest && manifest.icons && manifest.icons.value) {
      const icons192 = manifest.icons.value.find(icon => {
        const sizesArray = icon.value.sizes.value;
        return sizesArray && sizesArray.indexOf('192x192') !== -1;
      });
      hasIcons = (!!icons192);
    }

    return ManifestIcons192.generateAuditResult(hasIcons);
  }
}

module.exports = ManifestIcons192;
