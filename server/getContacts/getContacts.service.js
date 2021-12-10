import { UnprocessableError } from '../Errors/customErrors';
import * as getContactsRepo from './getContacts.repository';

export const getContact = async (contact) => {
    const result = await getContactsRepo.get(contact);

    if (!result) {
        throw new UnprocessableError('Unable to get contacts')
    }

    return result;
};