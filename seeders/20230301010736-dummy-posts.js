"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */

        await queryInterface.bulkInsert(
            "posts",
            [
                {
                    title: "Hewwo World",
                    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo corrupti suscipit illum, quos aut facere autem beatae nihil minus dolores?",
                    tags: "hello,world",
                },
                {
                    title: "Another Hewwo World",
                    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo corrupti suscipit illum, quos aut facere autem beatae nihil minus dolores?",
                    tags: "hello,world",
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.buldDelete("posts", null, {});
    },
};
