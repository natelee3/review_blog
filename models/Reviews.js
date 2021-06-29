'use strict';

const db = require('./conn');

class ReviewModel {
    constructor(id, review_text, user_id, mallet_id) {
        this.id = id;
        this.review_text = review_text;
        this.user_id = user_id;
        this.mallet_id = mallet_id;
    }

    static async addReview(review_text, user_id, mallet_id) {
        try {
            const query = `
            INSERT INTO reviews (review_text, user_id, mallet_id)
            VALUES ('${review_text}','${user_id}','${mallet_id}');`
            const response = await db.result(query);
            return response;
        } catch (error) {
            console.error('ERROR: ', error);
            return error;
        }
    }
}

module.exports = ReviewModel;