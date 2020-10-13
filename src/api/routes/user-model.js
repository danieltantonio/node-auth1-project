const db = require('../../db/connect');

module.exports = {
    get,
    // getById,
    add,
    login
};

function get() {
    return db('users');
};

function add(data) {
    return db('users')
    .insert(data, 'id');
};

function login(username) {
    return db('users')
    .where('username', '=', username)
}