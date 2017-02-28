'use strict';

// Ensure we're in the project directory, so cwd-relative paths work as expected
// no matter where we actually lift from.
process.chdir(__dirname);

const chewie = require("chewie-system");

// Start the system
chewie.start({
    settings: {
        "system": {
            "tmpDir": "./.chewie/.tmp",
            "appDataPath": "./.chewie"
        },
        "hooks": {
            // Here you enable your hook and provide the direct path so Chewie is able to load it.
            "chewie-hook-seed": { modulePath: __dirname + "/.." },
        }
    }
});