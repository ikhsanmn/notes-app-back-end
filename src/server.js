/* eslint-disable indent */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
// console.log('Hallo kita akan membuat RESTFul API');

const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

init();