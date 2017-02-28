const packageInfo = require("./package.json");
let _ = require("lodash");
let localConfig = require("./config");
// Chewie use https://www.npmjs.com/package/debug to debug information. It's up to you to debug your module the way you want
// but if you follow the convention it may be easier for you and other users to debug this module through chewie.
// By convention your debug key start by "chewie:hook:" and follow by your package name
let debug = require("debug")("chewie:hook:" + packageInfo.name);

/**
 * You custom Chewie hook.
 *
 * Both initialize and shutdown method are not mandatory but if you define it you have to return a Promise.
 */
class MyHook {

    /**
     * The constructor allow you to prepare your hook before initialization.
     * @param {Object} chewie - Chewie instance
     * @param {Object} userConfig - This is the config set by user for your hook. You can use it with your own config.
     * @param {Object} helper - An helper that help you dealing with such things as your hook storage, ...
     *                 You are never obliged to use the helper as all it does is using chewie instance
     *                 and provide more convenient methods for hooks.
     * @param {Object} helper.logger - A convenient logger you may use to display information.
     *                 logger provide .info, .verbose, .waring, .error.
     *                 helper.logger is not really meant to be used as debug tool (although you can), you can use debug() for that.
     *                 The logs will be displayed to user depending of its config (info, verbose, warning, error)
     */
    constructor(chewie, userConfig, helper) {
        this.chewie = chewie;
        this.config = _.merge(localConfig, userConfig);
        this.helper = helper;
    }

    /**
     * This method is called at system startup and need a promise as return to continue.
     * As long as you do not fulfil the promise the system will not be ready.
     * @returns {Promise}
     */
    initialize() {
        this.helper.logger.verbose("Initialized and ready");
        return Promise.resolve();
    }

    /**
     * This method is called on system shutdown. It allow you to clean some tasks.
     * Like initialize method, the system will wait for you to fulfil the promise.
     * @returns {Promise}
     */
    shutdown() {
        return Promise.resolve();
    }
}

module.exports = MyHook;