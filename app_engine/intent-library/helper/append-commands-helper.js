/**
 * Copyright 2020 Quantiphi, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

"use strict";


const logger = require("../../logger");

/**
  * appendCommandHelper for appending the target commands to params.sessionEventResult
  * @param {Object} sourceCommands params.sessionEventResult commands
  * @param {Object} targetCommands new set of commands to e replaced in params.sessionEventResult
  * @param {Object} params
  */
const appendCommandHelper = async (sourceCommands, targetCommands, params) => {
    try {
        await targetCommands.filter(function (cmd) {
            sourceCommands.push(cmd);
        });
        return sourceCommands;
    } catch (err) {
        logger.log("error", `Webhook call failed: ${err.message}`, "intent-library/helper/append-commands-helper", { "message": err, session: params.dfSessionID });
        throw err;
    }
};

module.exports = { appendCommandHelper };

