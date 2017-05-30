// @flow

import {
  Platform
} from '@walmart/ern-util'

exports.command = 'current'
exports.desc = 'Show current platform version'

exports.builder = {}

exports.handler = function (argv: any) {
  log.info(`Platform version : v${Platform.currentVersion}`)
}
