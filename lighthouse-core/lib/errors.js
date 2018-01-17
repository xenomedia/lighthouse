/**
 * @license Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

const strings = require('./strings');

class LighthouseError extends Error {
  constructor(errorDefinition) {
    super(errorDefinition.code);
    Error.captureStackTrace(this, LighthouseError);
    this.friendlyMessage = errorDefinition.message;
  }
}

const errors = {
  NO_SPEEDLINE_FRAMES: {message: strings.didntCollectScreenshots},
  SPEEDINDEX_OF_ZERO: {message: strings.didntCollectScreenshots},
  NO_SCREENSHOTS: {message: strings.didntCollectScreenshots},

  NO_TRACING_STARTED: {message: strings.badTraceRecording},
  NO_NAVSTART: {message: strings.badTraceRecording},
  NO_FMP: {message: strings.badTraceRecording},
  NO_DCL: {message: strings.badTraceRecording},

  FMP_TOO_LATE_FOR_FCPUI: {message: strings.pageLoadTookTooLong},
  NO_FCPUI_IDLE_PERIOD: {message: strings.pageLoadTookTooLong},
  NO_TTI_CPU_IDLE_PERIOD: {message: strings.pageLoadTookTooLong},
  NO_TTI_NETWORK_IDLE_PERIOD: {message: strings.pageLoadTookTooLong},
};

Object.keys(errors).forEach(code => errors[code].code = code);

LighthouseError.errors = errors;
module.exports = LighthouseError;

