import { NotFoundError } from "../Errors/customErrors";
import * as getContactService from './getContacts.service';

export const getContact = async (req, res, next) => {
    try {
        const result = await getContactService.getContact();

        if (result) {
            res.status(200).json({ status: 200, data: result, message: "Successfully retreived contacts" })
        } else {
            throw new NotFoundError('')
        }



    } catch (err) {
        next(err)
    }
};