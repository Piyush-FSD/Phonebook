

import { BadRequestError } from '../Errors/customErrors.js';
import * as contactsService from './contacts.service';
import { v4 as uuidv4 } from 'uuid'

export const addNewContact = async (req, res, next) => {
    try {
        const { firstName, lastName, phoneNum } = req.body;

        if (
            !firstName || !lastName || !phoneNum
        ) {
            throw new BadRequestError('Missing fields')
        }

        const contactResult = await contactsService.addNewContact({ _id: uuidv4(), firstName, lastName, phoneNum })

        return res.status(200).json({ status: 200, data: contactResult, message: "Successfully added new contact" })


    } catch (err) {
        next(err);
    }
};


