exports.config = {
    
    specs: [
        './test/specs/test.js'
    ],
    
    exclude: [
        
    ],
    
    maxInstances: 10,
    
    capabilities: [{
        maxInstances: 5,
        browserName: 'firefox'
    }],
    sync: true,
    logLevel: 'silent',
    coloredLogs: true,
    deprecationWarnings: true,
    bail: 0,
    screenshotPath: './errorShots/',
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
		timeout: 1000000
    },
}