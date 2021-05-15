

const withPWA = require('next-pwa')

module.exports = withPWA({
    future: {
        webpack5: true,
    },
    pwa: {
        dest: 'public',
        disable: process.env.NODE_ENV === 'development',
        register: true,
        //skipWaiting: true,
        sw: 'service-worker.js',
    }
})

/*
module.exports = {
    future: {
        webpack5: true,
    },
    webpack: function (config, options) {
        config.experiments = {};
        return config;
    },
};
*/