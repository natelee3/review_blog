'use strict';

const db = require('./conn');

class MalletsModel {
    constructor(id, brand_id, model_number, name, shaft, msrp) {
        this.id = id;
        this.brand_id= brand_id;
        this.model_number = model_number;
        this.name = name;
        this.shaft = shaft;
        this.msrp = msrp;
    }
    static async getAllMalletData() {
        try {
            const response = await db.any(
                `SELECT mallets.id, model_number, name, shaft, brand_name, img, msrp, "for"  FROM mallets
                INNER JOIN brands
                ON mallets.brand_id = brands.id`
            )
        return response;
        } catch (error) {
            console.error('ERROR: ', error)
            return error;
        }
    }
    static async getMalletById(id) {
        try {
            const response = await db.any(
                `SELECT mallets.id, model_number, name, shaft, brand_name, img, msrp, "for"  FROM mallets
                INNER JOIN brands
                ON mallets.brand_id = brands.id
                WHERE mallets.id = ${id};`
            )
        return response;
        } catch (error) {
            console.error('ERROR: ', error)
            return error;
        }
    }
    static async getAllReviewsById(id) {
        try {
            const response = await db.any(
                `SELECT * FROM reviews
                INNER JOIN users
                ON reviews.user_id = users.id
                WHERE mallet_id = ${id};`
            )
        return response;
        } catch (error) {
            console.error('ERROR: ', error)
            return error;
        }
    }
}

module.exports = MalletsModel;