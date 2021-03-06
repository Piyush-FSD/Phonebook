import { BadRequestError } from '../Errors/customErrors';
import * as contactsService from './addContacts.service';
import { v4 as uuidv4 } from 'uuid'

export const addNewContact = async (req, res, next) => {
    try {
        const { firstName, lastName, phoneNum, email } = req.body;

        if (
            !firstName || !lastName || !phoneNum || !email
        ) {
            throw new BadRequestError('Missing fields')
        };

        const contactResult = await contactsService.addNewContact({ _id: uuidv4(), firstName, lastName, phoneNum, email });

        return res.status(200).json({ status: 200, data: contactResult, message: "Successfully added new contact" });

    } catch (err) {
        next(err);
    }
};


