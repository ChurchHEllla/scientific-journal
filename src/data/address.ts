import type { ContactInfo } from '@/models/address'

export const addressData: ContactInfo = {
  url: 'https://madi.ru/', // Опционально
  address: '125319, Москва, Ленинградский проспект, 64, комн. 815н.',
  people: [
    {
      position: 'Заместитель начальника редакционно-издательского отдела',
      fullName: 'САФИНА Лилиана Михайловна',
      roomNumber: '815н',
      email: 'vestnik@madi.ru',
      phone: '8 (499) 346-01-68 доб. 3152',
    },
  ],
}
