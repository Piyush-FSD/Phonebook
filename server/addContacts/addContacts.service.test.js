// import { UnprocessableError } from '../Errors/customErrors';
// import * as contactsRepository from './contacts.repository';
// import { addNewContact } from "./contacts.service";

// describe('addNewContact', () => {


//     it('throws UnprocessableError when unable to add contact', async () => {


//         const contactsRepositorySpy = jest.spyOn(contactsRepository, 'add').mockResolvedValue(undefined);

//         const mockContactInfo = {};

//         try {
//             await addNewContact(mockContactInfo)
//         } catch (error) {

//             expect(error).toBeInstanceOf(UnprocessableError)
//         }
//     })
// })
