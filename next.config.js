

const withPWA = require('next-pwa')

module.exports = withPWA({
    future: {
        webpack5: true,
    },
    webpack: function (config, options) {
        config.experiments = {};
        return config;
    },
    pwa: {
        dest: 'public',
        disable: process.env.NODE_ENV === 'development',
        register: true,
        skipWaiting: true,
        //        scope: '/app',
        //        sw: 'service-worker.js',
    }
})