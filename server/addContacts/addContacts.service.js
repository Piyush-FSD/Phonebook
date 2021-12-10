import { UnprocessableError } from '../Errors/customErrors';
import * as contactsRepository from './addContacts.repository';

export const addNewContact = async (contactInformation) => {

    const result = await contactsRepository.add(contactInformation);

    if (!result) {
        throw new UnprocessableError('Unable to add contact')
    }

    return result;
};

