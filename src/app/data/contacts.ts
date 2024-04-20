import { Contact } from "../types/contact";

export const contactsData: Contact[] = [
  {
    id: 1,
    firstName: 'Freddie',
    lastName: 'Mercury',
    phoneNumber: '1234567890',
    email: 'freddie@example.com',
    birthDate: new Date('1946-09-05'),
    address: '1 Queen St'
  },
  {
    id: 2,
    firstName: 'David',
    lastName: 'Bowie',
    phoneNumber: '9876543210',
    email: 'david@example.com',
    birthDate: new Date('1947-01-08'),
    address: '2 Stardust St'
  },
  {
    id: 3,
    firstName: 'Stevie',
    lastName: 'Wonder',
    phoneNumber: '5555555555',
    email: 'stevie@example.com',
    birthDate: new Date('1950-05-13'),
    address: '3 Motown Ave'
  },
  {
    id: 4,
    firstName: 'Aretha',
    lastName: 'Franklin',
    phoneNumber: '1112223333',
    email: 'aretha@example.com',
    birthDate: new Date('1942-03-25'),
    address: '4 Soul St'
  },
  {
    id: 5,
    firstName: 'Jimi',
    lastName: 'Hendrix',
    phoneNumber: '4445556666',
    email: 'jimi@example.com',
    birthDate: new Date('1942-11-27'),
    address: '5 Electric Ave'
  }
];
